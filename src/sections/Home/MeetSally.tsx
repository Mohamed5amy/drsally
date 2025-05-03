import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import { calenderIcon, star } from "@/icons"

const MeetSally = () => {
  return (
    <div className="bg-[url('/main2.svg')] bg-fixed bg-cover bg-center">
        <div className="container flex justify-end pb-32 pt-24">
            <div className="max-w-[624px]">
                <p className="text-[32px] font-bold text-primary mb-2"> Meet Sally </p>
                <AnimatedTitle className="text-[32px] font-bold text-primaryText mb-2"> Your Empathetic and Globally Minded Therapist </AnimatedTitle>
                <p className="text-xl text-lightText mb-2">
                    I'm Sally, a mother of two wonderful adult daughters and someone who has embraced the "trailing spouse" experience across numerous countries. This incredible journey has immersed me in diverse cultures, rich history, vibrant arts, and delicious food on nearly every continent.
                </p>
                <p className="text-xl text-lightText mb-6">
                    My international experience has given me a unique perspective on human challenges and resilience, allowing me to connect with clients from all walks of life with genuine understanding and empathy.
                </p>
                <div className="flex flex-col gap-4 mb-10">
                    <div className="text-primaryText text-xl flex gap-2"> <div className="flex-1">{star}</div> <p><strong>Compassionate and direct:</strong> I believe in honest feedback and a collaborative approach to your healing journey.</p> </div>
                    <div className="text-primaryText text-xl flex gap-2"> <div className="flex-1">{star}</div> <p><strong> International experience:</strong> Having worked with clients across cultures, I bring a global perspective to our sessions.</p> </div>
                    <div className="text-primaryText text-xl flex gap-2"> <div className="flex-1">{star}</div> <p><strong>Holistic approach:</strong> I consider all aspects of your life mental, emotional, physical, and social in our work together.</p> </div>
                    <div className="text-primaryText text-xl flex gap-2"> <div className="flex-1">{star}</div> <p><strong>Results-oriented:</strong> If you're not seeing progress, I want to know, and we'll adjust our approach accordingly.</p> </div>
                </div>
                <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
            </div>
        </div>
    </div>
  )
}

export default MeetSally