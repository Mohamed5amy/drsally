"use client"

import { useEffect, useRef } from "react"
import AnimatedTitle from "@/components/AnimatedTitle"
import { checkIcon } from "@/icons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Concerns = () => {
  const sectionRef : any = useRef(null)

  const concerns = [
    "Abuse / Abuse Survivor Issues",
    "Addictions and Compulsions",
    "Aggression and Violence",
    "Anger",
    "Anxiety",
    "Breakup",
    "Social Anxiety / Phobias",
    "Control Issues",
    "Depression",
    "Divorce / Divorce Adjustment",
    "Drug and Alcohol Addiction",
    "Emotional Abuse",
    "Family Problems",
    "Young Adult Issues",
    "Fear",
    "Grief, Loss, and Bereavement",
    "Life Purpose / Meaning / Inner-Guidance",
    "Midlife Crisis / Midlife Transition",
    "Panic",
    "Phobias",
    "Stress",
    "Physical Abuse",
    "Posttraumatic Stress / Trauma",
    "Pre-Marital Counseling",
    "Relationships and Marriage",
    "Sex Addiction",
    "Sexual Assault / Abuse",
    "Sexuality / Sex Therapy"
  ]

  // Split concerns into 4 columns
  const columns : string[][] = [[], [], [], []]
  concerns.forEach((concern, index) => {
    columns[index % 4].push(concern)
  })

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".concern-item")
    gsap.from(items, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    })
  }, [])

  return (
    <div className="container py-20" ref={sectionRef}>
      <AnimatedTitle className='text-primaryText text-center mb-6 text-[24px] md:text-[32px] font-bold'>
        Client Concerns Treated
      </AnimatedTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-2.5 concern-column">
            {column.map((item, j) => (
              <div key={j} className="flex items-center gap-2 text-lg concern-item">
                <span className="text-secondary">{checkIcon}</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Concerns
