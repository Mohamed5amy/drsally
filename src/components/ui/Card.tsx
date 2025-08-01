"use client"

import { clock, rightChevron2 } from '@/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';


const Card: React.FC<ServiceCardProps> = ({
  title = "Example service",
  titleAr = "خدمة مثال",
  description = "Description of your service",
  descriptionAr = "وصف خدمتك",
  duration = "1 hour",
  durationAr = "1 hour",
  onBookClick = () => console.log('Book service clicked'),
  price = "150",
  service = -1,
  number = 0,
}) => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        if(service === number) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [service, number])

    const t = useTranslations();
    const locale = useLocale();

  return (
    <div className={`flex flex-1 items-center gap-2 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
        {/* Arrow */}
        <div className={`hidden lg:flex items-center relative gap-0 transition-all duration-1000 ${active ? "w-[10%]" : "w-[0%]"}`}>
            {active && <span className={`text-primary ${locale === "ar" ? "rotate-180" : ""}`} data-aos="fade-right" data-aos-duration="1500">{rightChevron2}</span>}
            {active && <span className={`text-secondary absolute -start-6 bottom-0 ${locale === "ar" ? "rotate-180" : ""}`} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500">{rightChevron2}</span>}
        </div>
        {/* Card */}
        <div className={`${active && "ring-4 ring-[rgba(100,156,159,0.10)]"} flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all`}>
            <div className="flex items-start lg:items-center flex-col lg:flex-row p-2 pr-2 pb-6 lg:pb-2 lg:pr-6 gap-4">
                {/* Service Image */}
                <div className="flex-grow w-full lg:max-w-[256px] h-[200px]">
                    <Image
                        width={256}
                        height={200}
                        src={"/main2.svg"}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl max-w-full"
                    />
                </div>

                {/* Service Content */}
                <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-primaryText mb-3">
                        {locale === "en" ? title : titleAr}
                    </h3>
                    
                    <p className="text-primaryText mb-4 text-base">
                        {locale === "en" ? description : descriptionAr}
                    </p>

                    {/* Duration & Price */}
                    <div className="flex items-center gap-4">
                        {/* Duration */}
                        <div className="flex items-center text-secondary">
                            {clock}
                            <span className="text-base text-primaryText ms-2 font-medium">{t('card_duration')}: {locale === "en" ? duration : durationAr}</span>
                        </div>
                        {/* Separator */}
                        <div className="h-4 w-px bg-gray-200"></div>
                        {/* Price */}
                        <div className="flex items-center text-secondary">
                            <span className='block text-xl'>$</span>
                            <span className="text-base text-primaryText ms-2 font-medium">{t('card_price')}: {price}</span>
                        </div>
                    </div>
                </div>

                {/* Book Service Button */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                    {active ? <button
                        onClick={() => {setActive(!active); onBookClick()}}
                        className="px-12 py-4 border-2 border-primary rounded-full font-medium transition-all w-full relative group hover:px-14 bg-primary text-white">
                        {t('card_unselectService')}
                    </button> : <button
                        onClick={() => {setActive(!active); onBookClick()}}
                        className="px-12 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium transition-all w-full relative group hover:px-14 hover:bg-primary hover:text-white">
                        {t('card_selectService')}
                    </button>}
                </div>
            </div>
        </div>
    </div>
  );
};

interface ServiceCardProps {
  title?: string;
  titleAr?: string;
  description?: string;
  descriptionAr?: string;
  duration?: string;
  durationAr?: string;
  onBookClick?: () => void;
  price?: string;
  service?: number;
  number?: number;
}

export default Card;