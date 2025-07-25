
import AnimatedTitle from "@/components/AnimatedTitle";
import Magnetic from "@/components/Magnetic";
import { testimonials } from "@/data/testimonials";
import { quotation } from "@/icons"
import { useLocale, useTranslations } from 'next-intl';

function shuffleArray(array : any) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Testimonials = () => {
  const t = useTranslations();
  const test = shuffleArray(testimonials);
  const locale = useLocale();
  return (
    <div className="py-20 relative bg-[rgba(251,226,214,0.20)]">
        <div className="container">
          <AnimatedTitle className='text-primaryText mb-2 text-[32px] font-bold text-center'>
            {t('services_testimonials_title')}
          </AnimatedTitle>
          <p className='text-lightText text-xl mb-8 text-center'>
            {t('services_testimonials_desc')}
          </p>
          {/* Boxes */}
          <div className="flex flex-col md:flex-row gap-10">
              {test.slice(0 , 2).map((test : {comment : string , commentAr : string , name : string}, idx : number) => (
              <Magnetic strength={0.05} key={idx}>
                <div
                    key={idx}
                    className="py-12 px-10 rounded-2xl bg-textPrimary relative"
                >
                    <div className="absolute top-4 left-3"> {quotation} </div>
                    <p className="text-lg mb-2">
                    {locale === "en" ? test.comment : test.commentAr}
                    </p>
                    <h4 className="text-2xl font-semibold text-secondaryText">— {test.name}</h4>
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