"use client"

import NormalButton from '@/components/custom/NormalButton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SimpleCard from '@/components/ui/SimpleCard';
import { services } from '@/data/services';
import { calenderIcon, clock } from '@/icons';
import { useRouter } from 'next/navigation';
import { format } from "date-fns";
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { useEffect, useState } from 'react';
import { bookRequest, getSlots } from '@/APIs/appointments';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { toast } from 'react-toastify';
import { useLocale, useTranslations } from 'next-intl';

// Helper to convert "14:00" to a Date object (today's date)
function timeStringToDate(timeStr: string) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

function getThirtyMinuteIntervals(slot: string) {
  const [start, end] = slot.split("-");
  const intervals = [];
  let [startHour, startMinute] = start.split(":")?.map(Number);
  let [endHour, endMinute] = end.split(":")?.map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current < endTime) {
    const next = new Date(current.getTime() + 30 * 60000);
    intervals.push({
      start_time: current.toTimeString().slice(0, 5),
      end_time: next <= endTime ? next.toTimeString().slice(0, 5) : end.toString(),
    });
    current = next;
  }
  return intervals;
}

const Step2 = ({ days, bookings }: { days: string[]; bookings: number }) => {
  const { data, setData } = useAppointmentStore();
  const router = useRouter();
  const t = useTranslations();
  const user: { token: string } | null = useAuthUser();
  const [loading, setLoading] = useState(false);
  const locale = useLocale()

  const handleSubmit = async () => {
    const service = services.find(item => item.id === data.service);
    if (!user?.token) return toast.error(t("toast_login_required"));
    if (!service) return toast.error(t("toast_select_service"));
    if (!days.includes(data.day || "")) return toast.error(t("toast_valid_date"));

    const newData = {
      booking_date: data?.day,
      type: service?.title,
      booking_times: getThirtyMinuteIntervals(data.slots || ""),
      price: bookings == 1 ? service?.discountPrice : service?.price,
    };

    setLoading(true);
    try {
      const res = await bookRequest(user?.token || "", newData);
      if (res) {
        setData({ booking_id: res.id });
        router.push('/appointments?step=4');
      } else {
        toast.error(t("error_generic"));
        console.log(res);
      }
    } catch (err) {
      console.log(err);
      toast.error(t("error_generic"));
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (bookings === 0) {
      router.push('/appointments?step=3');
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    router.push('/appointments?step=1');
  };

  // Get Service
  const service = services.find(item => item.id === data.service);

  // Get Times
  const [slots, setSlots] = useState<{ start: string; end: string }[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSlots(
          data?.day?.toString() || "",
          (service?.duration?.slice(0, 2) == "15" ? "30" : service?.duration?.slice(0, 2)) || "",
          user?.token || ""
        );
        setSlots(res[0]);
      } catch (err) {
        console.log(err);
        toast.error(t("error_slots"));
      }
    };

    data.day && getData();
  }, [data.day]);

  return (
    <div className='container' data-aos="fade-up">
      {/* Card */}
      <SimpleCard
        title={service?.title}
        titleAr={service?.titleAr}
        description={service?.description}
        descriptionAr={service?.descriptionAr}
        duration={service?.duration}
        durationAr={service?.durationAr}
        price={bookings == 1 ? service?.discountPrice : service?.price}
      />
      {/* Time */}
      <div className='flex items-center justify-between mt-12 mb-6 flex-col md:flex-row'>
        <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold'>
          {t("select_date_time")}
        </h4>
        <h4 className='text-secondaryText md:text-lg lg:text-xl font-semibold'>
          {t("time_zone")}
        </h4>
      </div>
      <div className='p-5 bg-textPrimary rounded-3xl flex items-center gap-4 mb-14 flex-col md:flex-row'>
        {/* Date Picker */}
        <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
          <label htmlFor="date" className="md:text-xl font-bold">
            {t("select_date")}
          </label>
          <Select value={data.day} onValueChange={(value) => setData({ day: value })} dir={locale === "en" ? "ltr" : "rtl"}>
            <SelectTrigger className='p-3 h-12 font-semibold ps-11 rounded-xl bg-bg border border-[#C8DCD7] relative'>
              <SelectValue placeholder={t("available_dates")} />
              <span className='absolute start-3 text-primary'> {calenderIcon} </span>
            </SelectTrigger>
            <SelectContent className='bg-white'>
              {days?.map((day, index) => (
                <SelectItem key={index} value={day} className='transition-colors hover:bg-bg'>
                  {format(day, "EEE, d MMM  yyyy")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Time Picker */}
        <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
          <label htmlFor="date" className="md:text-xl font-bold">
            {t("select_slot")}
          </label>
          <Select
            value={data.slots}
            onValueChange={value => setData({ slots: value })}
            disabled={!data.day} dir={locale === "en" ? "ltr" : "rtl"}
          >
            <SelectTrigger className='p-3 h-12 font-semibold ps-11 rounded-xl bg-bg border border-[#C8DCD7] relative'>
              <SelectValue placeholder={t("available_slots")} />
              <span className='absolute start-3 text-primary'> {clock} </span>
            </SelectTrigger>
            <SelectContent className='bg-white'>
              {slots?.length > 0 ? (
                slots.map((day, index) => (
                  <SelectItem
                    key={index}
                    value={day.start + "-" + day.end}
                    className='transition-colors hover:bg-bg'
                  >
                    {format(timeStringToDate(day.start), "h:mm a")} - {format(timeStringToDate(day.end), "h:mm a")}
                  </SelectItem>
                ))
              ) : (
                <p className='p-4 font-semibold'>{t("no_slots")}</p>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Buttons */}
      <div className='flex justify-end gap-4 flex-col-reverse sm:flex-row'>
        <NormalButton
          onClick={handlePrev}
          loading={loading}
          label={t("back")}
          styles='px-20 hover:px-24 bg-transparent !text-secondaryText border border-secondaryText'
        />
        <NormalButton
          onClick={handleNext}
          loading={loading}
          label={t("next")}
          styles='px-20 hover:px-24'
        />
      </div>
    </div>
  );
};

export default Step2;
