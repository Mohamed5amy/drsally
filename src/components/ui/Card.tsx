"use client"

import { clock, rightChevron2 } from '@/icons';
import Image from 'next/image';
import { useState } from 'react';


const Card: React.FC<ServiceCardProps> = ({
  title = "Example service",
  description = "Description of your service",
  duration = "1 hour",
  imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  onBookClick = () => console.log('Book service clicked'),
}) => {

    const [active, setActive] = useState(false)

  return (
    <div className='flex flex-1 items-center gap-2'>
        {/* Arrow */}
        <div className={`hidden lg:flex items-center relative gap-0 transition-all duration-1000 ${active ? "w-[10%]" : "w-[0%]"}`}>
            {active && <span className='text-primary' data-aos="fade-right" data-aos-duration="1500">{rightChevron2}</span>}
            {active && <span className='text-secondary absolute -left-6 bottom-0' data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500">{rightChevron2}</span>}
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
                    {title}
                </h3>
                
                <p className="text-primaryText mb-4 text-base">
                    {description}
                </p>

                {/* Duration */}
                <div className="flex items-center text-secondary">
                    {clock}
                    <span className="text-base text-primaryText ml-2 font-medium">{duration}</span>
                </div>
                </div>

                {/* Book Service Button */}
                <div className="flex-shrink-0 w-full lg:w-auto">
                    {active ? <button
                        onClick={() => setActive(!active)}
                        className="px-20 py-4 border-2 border-primary rounded-full font-medium transition-all w-full relative group hover:px-24 bg-primary text-white">
                        Unselect Service
                    </button> : <button
                        onClick={() => setActive(!active)}
                        className="px-20 py-4 bg-white border-2 border-primary text-primary rounded-full font-medium transition-all w-full relative group hover:px-24 hover:bg-primary hover:text-white">
                        Select Service
                    </button>}
                </div>
            </div>
        </div>
    </div>
  );
};

interface ServiceCardProps {
  title?: string;
  description?: string;
  duration?: string;
  imageUrl?: string;
  onBookClick?: () => void;
}

export default Card;