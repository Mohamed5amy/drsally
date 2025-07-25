import Boxes from "@/sections/Services/Boxes"
import Concerns from "@/sections/Services/Concerns"
import Header from "@/sections/Services/Header"
import JoinYou from "@/sections/Services/JoinYou"
import Remotely from "@/sections/Services/Remotely"
import Testimonials from "@/sections/Services/Testimonials"

const page = () => {
  return (
    <div>
        <Header />
        <Boxes />
        <Testimonials />
        <Remotely />
        <Concerns />
        <JoinYou />
    </div>
  )
}

export default page