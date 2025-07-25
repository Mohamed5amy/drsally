"use client"

import Lottie from "lottie-react"
import animationData from "@/animatedIcons/success.json"
import { calenderIcon, clock } from "@/icons"
import { useAppointmentStore } from "@/store/useAppointmentStore"
import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { services } from "@/data/services"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import Link from "next/link"
import NormalButton from "@/components/custom/NormalButton"
import { useLocale, useTranslations } from "next-intl"
import { enUS, ar } from "date-fns/locale";


function timeStringToDate(timeStr: string) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const Step5 = () => {
  const { data, resetData } = useAppointmentStore();
  const user: { name: string } | null = useAuthUser();
  const service = services.find(item => item.id === data?.service || null);
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale()
  const dateFnsLocale = locale === "ar" ? ar : enUS;

  const handleClick = () => {
    router.push("/profile/appointments");
    resetData();
  };

  return (
    <div data-aos="fade-up">
      {data?.day && (
        <div className="py-4 px-8 sm:py-10 sm:px-20 bg-textPrimary max-w-[700px] mx-auto flex items-center justify-center flex-col">
          <Lottie animationData={animationData} loop autoplay className="w-full h-[200px] sm:h-[300px]" />
          <h4 className="text-xl sm:text-2xl font-semibold text-center">
            {user?.name?.split(" ")[0] || ""}, {t("step5_confirmationMessage")}
          </h4>

          <div className="flex items-center gap-2 my-3 flex-col sm:flex-row">
            <span className="text-secondary"> {clock} </span>
            <span className="sm:text-lg text-center">
              {service && locale === "en" ? service?.duration : service?.durationAr } | {service && locale === "en" ? service?.title : service?.titleAr}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-col sm:flex-row mb-8">
            <span className="text-secondary"> {calenderIcon} </span>
            <span className="sm:text-lg text-center">
              {format(data?.day, "eeee, MMMM do, yyyy" , {locale : dateFnsLocale})} {t("step5_at")} {format(timeStringToDate(data?.slots?.slice(0, 5) || ""), "h:mm a" , {locale : dateFnsLocale})} CET
            </span>
          </div>

          <div className="flex gap-4 w-full flex-col sm:flex-row">
            <Link href={`/appointments/${data?.booking_id}`} className="flex-1">
              <NormalButton label={t("step5_reschedule")} styles="rounded-full w-full text-secondaryText font-semibold transition-all" />
            </Link>
            <NormalButton
              label={t("step5_myAppointments")}
              styles="rounded-full flex-1 text-secondaryText font-semibold transition-all hover:bg-gray-400/20"
              onClick={handleClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Step5;
