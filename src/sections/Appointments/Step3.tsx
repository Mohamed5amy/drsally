"use client"

import NormalButton from '@/components/custom/NormalButton';
import SimpleCard from '@/components/ui/SimpleCard';
import { useRouter } from 'next/navigation';

const Step3 = () => {

    const router = useRouter()

    const handleNext = () => {
        router.push('/appointments?step=4')
    }
    const handlePrev = () => {
        router.push('/appointments?step=2')
    }
    
    return (
        <div className='container' data-aos="fade-up">
            {/* Card */}
            <SimpleCard />
            {/* Time */}
            <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold mt-12 mb-4'> Your Information </h4>
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
                {/* First Name */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="fullName" className="md:text-xl font-bold">
                    First Name
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <input
                            type="text"
                            id="fullName"
                            placeholder='Enter your first name'
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* Last Name */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="lastName" className="md:text-xl font-bold">
                    Last Name
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <input
                            type="text"
                            id="lastName"
                            placeholder='Enter your last name'
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="phone" className="md:text-xl font-bold">
                    Phone Number
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <input
                            type="text"
                            id="phone"
                            placeholder='Enter your phone number'
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="email" className="md:text-xl font-bold">
                    Email Number
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <input
                            type="text"
                            id="email"
                            placeholder='Enter your email address'
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
            </div>
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 gap-4 mb-14'>
                {/* Have any question  */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="question" className="md:text-xl font-bold">
                    Questions
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <input
                            type="text"
                            id="question"
                            placeholder='Have any questions?'
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* Note */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold">
                    Notes
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='Any additional notes?'
                            rows={3}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
            </div>
            {/* Buttons */}
            <div className='flex flex-col-reverse sm:flex-row justify-end gap-4'>
                <NormalButton onClick={handlePrev} label='Back' styles='px-20 hover:px-24 bg-transparent !text-secondaryText border border-secondaryText' />
                <NormalButton onClick={handleNext} label='Next' styles='px-20 hover:px-24' />
            </div>
        </div>
    )
}


export default Step3