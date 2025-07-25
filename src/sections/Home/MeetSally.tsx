import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import { calenderIcon, star } from "@/icons"
import { getTranslations } from "next-intl/server"

const MeetSally = async () => {
    const t = await getTranslations()
    
    return (
        <div className="bg-[url('/main2.svg')] bg-fixed bg-cover bg-center">
            <div className="container flex justify-end pb-32 pt-24">
                <div className="max-w-[624px]">
                    <p className="text-[32px] font-bold text-primary mb-2">{t("meetSally")}</p>
                    <AnimatedTitle className="text-[32px] font-bold text-primaryText mb-2">{t("empatheticTherapist")}</AnimatedTitle>
                    <p className="text-xl text-lightText mb-2">
                        {t("sallyIntroduction")}
                    </p>
                    <p className="text-xl text-lightText mb-6">
                        {t("sallyExperience")}
                    </p>
                    <div className="flex flex-col gap-4 mb-10">
                        <div className="text-primaryText text-xl flex gap-2">
                            <div className="flex-1">{star}</div>
                            <p><strong>{t("compassionateDirect")}</strong> {t("compassionateDescription")}</p>
                        </div>
                        <div className="text-primaryText text-xl flex gap-2">
                            <div className="flex-1">{star}</div>
                            <p><strong>{t("internationalExperience")}</strong> {t("internationalDescription")}</p>
                        </div>
                        <div className="text-primaryText text-xl flex gap-2">
                            <div className="flex-1">{star}</div>
                            <p><strong>{t("holisticApproach")}</strong> {t("holisticDescription")}</p>
                        </div>
                        <div className="text-primaryText text-xl flex gap-2">
                            <div className="flex-1">{star}</div>
                            <p><strong>{t("resultsOriented")}</strong> {t("resultsDescription")}</p>
                        </div>
                    </div>
                    <Button label={t("scheduleConsultation")} icon={calenderIcon} />
                </div>
            </div>
        </div>
    )
}

export default MeetSally
