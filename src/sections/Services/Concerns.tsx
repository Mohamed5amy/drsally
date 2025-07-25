"use client"

import { useRef } from "react"
import AnimatedTitle from "@/components/AnimatedTitle"
import { checkIcon } from "@/icons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"

gsap.registerPlugin(ScrollTrigger)

const Concerns = () => {
  const t = useTranslations()
  const sectionRef: any = useRef(null)

  const concerns = [
    "Abuse_Abuse_Survivor_Issues",
    "Addictions_and_Compulsions",
    "Aggression_and_Violence",
    "Anger",
    "Anxiety",
    "Breakup",
    "Social_Anxiety_Phobias",
    "Control_Issues",
    "Depression",
    "Divorce_Divorce_Adjustment",
    "Drug_and_Alcohol_Addiction",
    "Emotional_Abuse",
    "Family_Problems",
    "Young_Adult_Issues",
    "Fear",
    "Grief_Loss_and_Bereavement",
    "Life_Purpose_Meaning_Inner_Guidance",
    "Midlife_Crisis_Midlife_Transition",
    "Panic",
    "Phobias",
    "Stress",
    "Physical_Abuse",
    "Posttraumatic_Stress_Trauma",
    "Pre_Marital_Counseling",
    "Relationships_and_Marriage",
    "Sex_Addiction",
    "Sexual_Assault_Abuse",
    "Sexuality_Sex_Therapy"
  ]

  const columns: string[][] = [[], [], [], []]
  concerns.forEach((concern, index) => {
    columns[index % 4].push(concern)
  })

  return (
    <div className="container py-20" ref={sectionRef}>
      <AnimatedTitle className='text-primaryText text-center mb-6 text-[24px] md:text-[32px] font-bold'>
        {t("Concerns_title")}
      </AnimatedTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-2.5 concern-column">
            {column.map((item, j) => (
              <div key={j} className="flex items-center gap-2 text-lg concern-item" data-aos="fade-up" data-aos-delay={j * 100}>
                <span className="text-secondary">{checkIcon}</span>
                {t(`Concerns_${item}`)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Concerns
