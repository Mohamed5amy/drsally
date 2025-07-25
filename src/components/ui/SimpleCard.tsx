import { clock, editIcon } from "@/icons";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const SimpleCard: React.FC<ServiceCardProps> = ({
  title = "Example service",
    titleAr = "خدمة مثال",
  description = "Description of your service",
  descriptionAr = "وصف خدمتك",
  duration = "1 hour",
  durationAr = "1 ساعة",
  price = "150",
}) => {

    const locale = useLocale();

  return (
    <div className='flex flex-1 items-center gap-2'>
        {/* Card */}
        <div className={`flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all`}>
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
                                <span className="text-base text-primaryText ms-2 font-medium">{locale === "en" ? duration : durationAr}</span>
                            </div>
                            {/* Separator */}
                            <div className="h-4 w-px bg-gray-200"></div>
                            {/* Price */}
                            <div className="flex items-center text-secondary">
                                <span className='block text-xl'>$</span>
                                <span className="text-base text-primaryText ms-2 font-medium">{price}</span>
                            </div>
                    </div>
                </div>

                {/* Book Service Button */}
                <Link href={`/appointments?step=1`} className="flex-shrink-0 w-full lg:w-auto">
                    <div className='w-12 h-12 bg-[#EFF3F4] rounded-2xl flex items-center justify-center transition-all text-secondaryText hover:text-primaryText cursor-pointer hover:scale-125'>
                        {editIcon}
                    </div>
                </Link>
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
}

export default SimpleCard;