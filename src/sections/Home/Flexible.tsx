import Button from "@/components/custom/Button"
import { calenderIcon, star } from "@/icons"
import Image from "next/image"

const Flexible = () => {
  return (
    <div className="py-20 container flex-col-reverse lg:flex-row flex gap-16 items-center">
        {/* Image */}
        <div className="flex-1">
            <Image src={"/main4.svg"} alt="Dr Sally Image" width={700} height={600} />
        </div>
        {/* Content */}
        <div className="flex-[1.1]">
            <h3 className="text-xl md:text-3xl font-bold pb-2"> To make therapy as accessible and comfortable as possible, I offer flexible options to suit your needs. </h3>
            <p className="text-lightText text-[16px] md:text-xl mb-6">
            Embrace the convenience and privacy of online sessions from the comfort of your home. Alternatively, for those who find movement and the outdoors beneficial, consider walk-and-talk therapy sessions in a park setting. This approach, which gained significant popularity during the pandemic and continues to help many, harnesses the powerful connection between  movement, nature, and psychological well-being.
            </p>
            <div className="text-primaryText text-[16px] md:text-xl flex gap-2 mb-4"> <div className="flex-1">{star}</div> <p> Walking side-by-side can create a less confrontational and more relaxed atmosphere, potentially making it easier to discuss complex or sensitive topics. </p> </div>
            <div className="text-primaryText text-[16px] md:text-xl flex gap-2 mb-2"> <div className="flex-1">{star}</div> <p> The gentle physical activity can also reduce anxiety and stress, release endorphins that boost mood, and enhance cognitive function and creative thinking. </p> </div>
            <p className="text-lightText text-[16px] md:text-xl mb-10">
            By engaging your body, you may find it easier to process emotions, gain new perspectives, and feel a sense of forward momentum, both literally and figuratively, on your healing journey. <strong className="text-primaryText">Why not give it a try and experience these unique benefits firsthand?</strong>
            </p>
            <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
        </div>
    </div>
  )
}

export default Flexible