import AnimatedTitle from "@/components/AnimatedTitle"
import Button from "@/components/custom/Button"
import { calenderIcon, star } from "@/icons"

const MyPhilosophy = () => {
  return (
    <div className="bg-[url('/main2.svg')] bg-fixed bg-cover bg-center">
        <div className="container flex justify-end pb-32 pt-24">
            <div className="max-w-[624px]">
                <AnimatedTitle className="text-[32px] font-bold text-primaryText mb-2"> My Philosophy </AnimatedTitle>
                <p className="text-xl text-lightText mb-2">
                    Embarking on a journey of self-healing is like opening the door to a world of boundless potential. It's an incredibly brave and empowering decision to make, one that offers you the chance to grow in ways you may never have imagined.
                </p>
                <p className="text-xl text-lightText mb-2">
                   When embarking on this journey, it's important to be guided and supported by someone who understands and respects your unique needs.
                </p>
                <p className="text-xl text-lightText mb-2">
                   In my practice, I strive to provide a safe, non-judgmental space for you to explore and discover more about yourself. Through our work together, I hope to help you build trust in yourself and your capabilities, as we uncover the building blocks for your healing journey. 
                </p>
                <p className="text-xl text-lightText mb-2">
                   I do not believe in having a one-size-fits-all approach – rather, I will work together with you to create a personalized plan, based on your unique goals, personality, and strengths. I will equip you with the necessary tools to build a ‘unique toolbox’, one filled with skills and resources that you can turn to whenever you need.
                </p>
                <p className="text-xl text-lightText mb-10">
                   Take a deep breath and trust that I am here to help you on this journey of self-healing – I am committed to supporting and empowering you every step of the way.
                </p>
                <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
            </div>
        </div>
    </div>
  )
}

export default MyPhilosophy