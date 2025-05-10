import AnimatedTitle from "@/components/AnimatedTitle";
import Magnetic from "@/components/Magnetic";
import { quotation } from "@/icons"

const Testimonials = () => {

    
  return (
    <div className="py-20 relative bg-[rgba(251,226,214,0.20)]">
        <div className="container">
          <AnimatedTitle className='text-primaryText mb-2 text-[32px] font-bold text-center'> Client Experiences </AnimatedTitle>
          <p className='text-lightText text-xl mb-8 text-center'>Hear from others who have worked with me on their journey toward healing and growth.</p>
          {/* Boxes */}
          <div className="flex gap-10">
              {[...Array(2)].map((_, idx) => (
              <Magnetic strength={0.05} key={idx}>
                <div
                    key={idx}
                    className="py-12 px-10 rounded-2xl bg-textPrimary relative"
                >
                    <div className="absolute top-4 left-3"> {quotation} </div>
                    <p className="text-lg mb-2">
                    “Working with Sally has been a transformational experience. I learn tools to better manage periods of anxiety and mental fatigue. Every session I feel at ease to share and work through concerns that are big and small. At times where I’ve had to make tough decisions, speaking through the situation.
                    </p>
                    <h4 className="text-2xl font-semibold text-secondaryText">— HV</h4>
                    <div className="absolute bottom-4 right-3 rotate-180"> {quotation} </div>
                </div>
              </Magnetic>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Testimonials