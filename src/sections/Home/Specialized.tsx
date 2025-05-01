import Button from "@/components/custom/Button"
import { calenderIcon } from "@/icons"
import Image from "next/image"

const Specialized = () => {
  return (
    <div className="py-8 sm:py-20 flex-col lg:flex-row container flex gap-16 items-center">
        {/* Content */}
        <div className="flex-[1.1]">
            <h3 className="text-xl md:text-3xl font-bold pb-2"> Specialized Holistic Therapy for Lasting Mental Well-being </h3>
            <p className="text-lightText text-[16px] md:text-xl mb-10">
            I specialise in addressing various mental health challenges with a scientifically grounded holistic approach. My training is continuously updated with the latest advancements in neuroscience and psychology, allowing me to offer therapy that targets the core issues that may have kept you feeling stuck.
            <span className="block h-2"></span>
            I understand that many people seek therapy to see tangible progress and lasting change. While ongoing support can benefit some, my focus is on empowering you to achieve meaningful results and build a fulfilling life as efficiently as possible. Let's begin that journey today.
            <span className="block h-2"></span>
            I offer a complimentary 15-minute consultation to discuss your needs and how my approach can help you become the best version of yourself. Please email me to schedule your free consultation. For clients who may benefit from medication, I collaborate with trusted psychiatrists to ensure comprehensive care. While I believe in exploring therapeutic avenues first, I recognise the value of medication when necessary and work as part of your wider support team.
            </p>
            <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
        </div>
        {/* Image */}
        <div className="flex-1">
            <Image src={"/main3.svg"} alt="Dr Sally Image" width={700} height={600} />
        </div>
    </div>
  )
}

export default Specialized