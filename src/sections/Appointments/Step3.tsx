"use client"

import CustomCheckbox from '@/components/custom/CustomCheckbox';
import NormalButton from '@/components/custom/NormalButton';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const checkboxOptions = [
    'Healing',
    'Self- Development',
    'Depression',
    'Anger Management',
    'Feelings of Negativity',
    'Anxiety / Stress',
    'Exam Anxiety',
    'Financial Worries',
    'Panic Attacks',
    'Stage Fright',
    'Acute Shyness',
    'Low Self-Esteem',
    'Lack of Confidence',
    'Relationship Issues',
    'Weight Issues & Management / Body Image',
    'Procrastination, Lack of Motivation / Energy',
    'Chronic Insomnia',
    'Nightmares',
    'Chronic Pain / Bodily Discomfort',
    'Sexual Issues',
    'Feelings of Guilt',
    'Addiction Issues',
    'Smoking',
    'Alcohol Abuse',
    'Drug Abuse',
    'Fears / Phobias',
    'Unwanted Habits',
    'Others',
];

const Step3 = () => {

    const router = useRouter()
    const {data , setData} = useAppointmentStore()

    const condition = !data.WhatToChange || !data.counseling || !data.hypnotized || !data.medicalConditions || !data.medication || !data.personalBeliefs || !data.physicalCare || (data.hypnotized && !data.hyponatizedReason) || (data.counseling && !data.counselingReason) || data.focus?.length === 0

    const handleNext = () => {
        if (condition) {
            toast.error("Please make sure to fill the whole form")
        } else {
            router.push('/appointments?step=4')
        }
    }
    const handlePrev = () => {
        router.push('/appointments?step=2')
    }
    
    return (
        <div className='container' data-aos="fade-up">
            {/* Time */}
            <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold mt-12 mb-4'> Tell Me About Yourself </h4>
            {/* Text Form */}
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 gap-4 mb-8'>
                {/* Medical Conditions */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        Medical condition or challenges
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='Medical condition or challenges :'
                            rows={3}
                            value={data.medicalConditions || ''}
                            onChange={(e) => setData({medicalConditions: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* Personal Beliefs */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        What are your personal spiritual or religious beliefs
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='What are your personal spiritual or religious beliefs ?'
                            rows={3}
                            value={data.personalBeliefs || ''}
                            onChange={(e) => setData({personalBeliefs: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* What you want to change */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                    What do you want to change or improve most during your session
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='What do you want to change or improve most during your session ?'
                            rows={3}
                            value={data.WhatToChange || ''}
                            onChange={(e) => setData({WhatToChange: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
            </div>
            {/* Check Form */}
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 gap-4 mb-8'>
                {/* Physical Care */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>Are you currently under a physician's care?</p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.physicalCare === "yes" && "yesActive"}`} onClick={() => setData({physicalCare : "yes"})}> Yes </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.physicalCare === "no" && "noActive"}`} onClick={() => setData({physicalCare : "no"})}> No </div>
                    </div>
                </div>
                {/* Medication */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>Are you currently on medication?</p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.medication === "yes" && "yesActive"}`} onClick={() => setData({medication : "yes"})}> Yes </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.medication === "no" && "noActive"}`} onClick={() => setData({medication : "no"})}> No </div>
                    </div>
                </div>
                {/* Counseling */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>Have you been in therapy or counseling before? </p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.counseling === "yes" && "yesActive"}`} onClick={() => setData({counseling : "yes"})}> Yes </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.counseling === "no" && "noActive"}`} onClick={() => setData({counseling : "no"})}> No </div>
                    </div>
                </div>
                {/* Reason */}
                {data.counseling === "yes" &&<div data-aos="fade-right" className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        For what reason
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='For what reason ?'
                            rows={3}
                            value={data.counselingReason || ''}
                            onChange={(e) => setData({counselingReason: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>}
                {/* Hypnotized */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>Have you ever been hypnotized before? </p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.hypnotized === "yes" && "yesActive"}`} onClick={() => setData({hypnotized : "yes"})}> Yes </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.hypnotized === "no" && "noActive"}`} onClick={() => setData({hypnotized : "no"})}> No </div>
                    </div>
                </div>
                {/* Reason 2 */}
                {data.hypnotized === "yes" && <div data-aos="fade-right" className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        For what reason
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder='For what reason ?'
                            rows={3}
                            value={data.hyponatizedReason || ''}
                            onChange={(e) => setData({hyponatizedReason: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>}
            </div>
            {/* Checkboxes */}
            <p className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold mt-12 mb-4'>Please tick any of the following you wish to focus on.</p>
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {checkboxOptions.map(option => (
                    <div key={option} className='flex items-center gap-2'>
                        <CustomCheckbox
                            id={option}
                            label={option}
                            checked={data.focus?.includes(option) || false}
                            onChange={
                                (val) => {
                                    val ? setData({focus : [...(data.focus || []), option]}) :
                                    setData({focus : data.focus?.filter(item => item !== option)})
                                }
                            }
                        />
                    </div>
                ))}
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