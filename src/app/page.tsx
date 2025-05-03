import Loading from "@/components/custom/Loading";
import CustomCursor from "@/components/CustomCursor";
import Blogs from "@/sections/Home/Blogs";
import Credentials from "@/sections/Home/Credentials";
import FirstStep from "@/sections/Home/FirstStep";
import Flexible from "@/sections/Home/Flexible";
import Main from "@/sections/Home/Main";
import MeetSally from "@/sections/Home/MeetSally";
import Services from "@/sections/Home/Services";
import Specialized from "@/sections/Home/Specialized";
import Testimonials from "@/sections/Home/Testimonials";

export default function Home() {
  return (
    <div className="max-w-[100vw] overflow-x-hidden" >
      {/* <Loading /> */}
      <Main />
      <Credentials />
      <MeetSally />
      <Services />
      <Specialized />
      <Flexible />
      <FirstStep />
      <Testimonials />
      <Blogs />
    </div>
  )
}
