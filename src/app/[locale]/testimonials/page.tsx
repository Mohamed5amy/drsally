import Header from "@/sections/Blog/Header"
import Testimonials from "@/sections/Testimonials/Testimonials"
import { getTranslations } from "next-intl/server"

const page = async () => {
  const t = await getTranslations()

  return (
    <div>
      <Header label={t("Page_testimonials")} />
      <Testimonials />
    </div>
  )
}

export default page
