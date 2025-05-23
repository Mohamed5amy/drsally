"use client"

import NormalButton from '@/components/custom/NormalButton';
import SimpleCard from '@/components/ui/SimpleCard';
import { calenderIcon, clock } from '@/icons';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const Step2 = () => {

    const dateRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);

    const router = useRouter()

    const handleNext = () => {
        router.push('/appointments?step=3')
    }
    const handlePrev = () => {
        router.push('/appointments?step=1')
    }
    
    return (
        <div className='container' data-aos="fade-up">
            {/* Card */}
            <SimpleCard />
            {/* Time */}
            <div className='flex items-center justify-between mt-12 mb-6 flex-col md:flex-row'>
                <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold'> Select Date & Time </h4>
                <h4 className='text-secondaryText md:text-lg lg:text-xl font-semibold'> Time Zone:Eastern Time (GMT-04:00) </h4>
            </div>
            <div className='p-5 bg-textPrimary rounded-3xl flex items-center gap-4 mb-14 flex-col md:flex-row'>
                {/* Date Picker */}
                <div
                    className="flex flex-col gap-4 flex-1 cursor-pointer w-full"
                    onClick={() => dateRef.current?.showPicker()}
                >
                    <label htmlFor="date" className="md:text-xl font-bold">
                    Select Date
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <span className='absolute right-3 text-primary'> {calenderIcon} </span>
                        <input
                            ref={dateRef}
                            type="date"
                            id="date"
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>

                {/* Time Picker */}
                <div
                    className="flex flex-col gap-4 flex-1 cursor-pointer w-full"
                    onClick={() => timeRef.current?.showPicker()}
                >
                    <label htmlFor="time" className="md:text-xl font-bold">
                    Select Time
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <span className='absolute right-3 text-primary'> {clock} </span>
                        <input
                            ref={timeRef}
                            type="time"
                            id="time"
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className='flex justify-end gap-4 flex-col-reverse sm:flex-row'>
                <NormalButton onClick={handlePrev} label='Back' styles='px-20 hover:px-24 bg-transparent !text-secondaryText border border-secondaryText' />
                <NormalButton onClick={handleNext} label='Next' styles='px-20 hover:px-24' />
            </div>
        </div>
    )
}





export default Step2