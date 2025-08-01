"use client"

import { bookRequest, questionsRequest } from '@/APIs/appointments';
import CustomCheckbox from '@/components/custom/CustomCheckbox';
import NormalButton from '@/components/custom/NormalButton';
import { services } from '@/data/services';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
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

function getThirtyMinuteIntervals(slot: string) {
    
    const [start, end] = slot.split("-");
    const intervals = [];
    let [startHour, startMinute] = start.split(":").map(Number);
    let [endHour, endMinute] = end.split(":").map(Number);
  
    let current = new Date();
    current.setHours(startHour, startMinute, 0, 0);
  
    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0);
  
    while (current < endTime) {
      const next = new Date(current.getTime() + 30 * 60000);
      intervals.push({
        start_time: current.toTimeString().slice(0, 5),
        end_time: next <= endTime ? next.toTimeString().slice(0, 5) : end.toString(),
      });
      current = next;
    }
    return intervals;
}

const Step3 = ({bookings} : {bookings : number}) => {

    const t = useTranslations()

    const router = useRouter()
    const {data , setData } = useAppointmentStore()
    const [loading, setLoading] = useState(false)

    const user : {token : string} | null = useAuthUser()

    const service = services.find(item => item.id === data.service)

    const condition = !data.WhatToChange || !data.counseling || !data.hypnotized || !data.medicalConditions || !data.medication || !data.physicalCare || (data.hypnotized === "yes" && !data.hyponatizedReason) || (data.counseling === "yes" && !data.counselingReason) || data.focus?.length === 0

    const handleSubmitUserData = async () => {
        const newData = {
            question1 : data.medicalConditions,
            question2 : "not wanted",
            question3 : data.WhatToChange,
            question4 : data.physicalCare,
            question5 : data.medication,
            question6 : data.counseling,
            question7 : data.counselingReason || "No reason",
            question8 : data.hypnotized,
            question9 : data.hyponatizedReason || "No reason",
            question10 : data.focus,
        }
        try {
            const res = await questionsRequest(user?.token || "" , newData)
            if (res) {
                router.push('/appointments?step=4')
            } else {
                toast.error("Something went wrong please try again");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong please try again");
        }
    }

    const handleSubmit = async () => {
        const newData = {
            booking_date : data?.day,
            type : service?.title,
            booking_times : getThirtyMinuteIntervals(data.slots || ""),
            price: bookings == 1 ? service?.discountPrice : service?.price,
        }
        setLoading(true)
        try {
            const res = await bookRequest(user?.token || "" , newData)
            if (res) {
                console.log("Booking Success" , res)
                setData({booking_id: res.id}) // Save booking ID to store
                handleSubmitUserData()
                
            } else {
                toast.error("Something went wrong please try again");
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong please try again");
        } finally {
            setLoading(false)
        }
    }

    const handleNext = () => {
        if (condition) {
            toast.error("Please make sure to fill the whole form")
        } else {
            handleSubmit()
        }
    }
    const handlePrev = () => {
        router.push('/appointments?step=2')
    }
    
    return (
        <div className='container' data-aos="fade-up">
            {/* Time */}
            <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold mt-12 mb-4'> {t("Tell Me About Yourself")} </h4>
            {/* Text Form */}
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 gap-4 mb-8'>
                {/* Medical Conditions */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        {t("Medical condition or challenges")}
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder={t('Medical condition or challenges') + " :"}
                            rows={3}
                            value={data.medicalConditions || ''}
                            onChange={(e) => setData({medicalConditions: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>
                {/* What you want to change */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                    {t("What do you want to change or improve most during your session")}
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder={t('What do you want to change or improve most during your session')}
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
                    <p className='md:text-xl font-bold normal'>{t("Are you currently under a physician's care?")}</p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.physicalCare === "yes" && "yesActive"}`} onClick={() => setData({physicalCare : "yes"})}> {t("yes")} </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.physicalCare === "no" && "noActive"}`} onClick={() => setData({physicalCare : "no"})}> {t("no")} </div>
                    </div>
                </div>
                {/* Medication */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>{t("Are you currently on medication?")}</p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.medication === "yes" && "yesActive"}`} onClick={() => setData({medication : "yes"})}> {t("yes")} </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.medication === "no" && "noActive"}`} onClick={() => setData({medication : "no"})}> {t("no")} </div>
                    </div>
                </div>
                {/* Counseling */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>{t("Have you been in therapy or counseling before?")} </p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.counseling === "yes" && "yesActive"}`} onClick={() => setData({counseling : "yes"})}> {t("yes")} </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.counseling === "no" && "noActive"}`} onClick={() => setData({counseling : "no"})}> {t("no")} </div>
                    </div>
                </div>
                {/* Reason */}
                {data.counseling === "yes" &&<div data-aos="fade-right" className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        {t("For what reason")}
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder={"....."}
                            rows={3}
                            value={data.counselingReason || ''}
                            onChange={(e) => setData({counselingReason: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>}
                {/* Hypnotized */}
                <div className='flex items-start md:items-center justify-between flex-col md:flex-row gap-2'>
                    <p className='md:text-xl font-bold normal'>{t("Have you ever been hypnotized before?")} </p>
                    <div className='flex gap-4'>
                        <div className={`px-12 py-2 rounded border border-primary text-primary transition-all hover:bg-primary hover:text-white hover:px-16 ${data.hypnotized === "yes" && "yesActive"}`} onClick={() => setData({hypnotized : "yes"})}> {t("yes")} </div>
                        <div className={`px-12 py-2 rounded border border-red-500 text-red-500 transition-all hover:bg-red-500 hover:text-white hover:px-16 ${data.hypnotized === "no" && "noActive"}`} onClick={() => setData({hypnotized : "no"})}> {t("no")} </div>
                    </div>
                </div>
                {/* Reason 2 */}
                {data.hypnotized === "yes" && <div data-aos="fade-right" className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="note" className="md:text-xl font-bold normal">
                        {t("For what reason")}
                    </label>
                    <div className="p-3 rounded-xl bg-bg border border-[#C8DCD7] relative">
                        <textarea
                            id="note"
                            placeholder={"....."}
                            rows={3}
                            value={data.hyponatizedReason || ''}
                            onChange={(e) => setData({hyponatizedReason: e.target.value})}
                            className="w-full bg-transparent outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
                        />
                    </div>
                </div>}
            </div>
            {/* Checkboxes */}
            <p className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold mt-12 mb-4'>{t("Please tick any of the following you wish to focus on")}.</p>
            <div className='p-5 bg-textPrimary rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {checkboxOptions.map(option => (
                    <div key={option} className='flex items-center gap-2'>
                        <CustomCheckbox
                            id={option}
                            label={t(option)}
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
                <NormalButton onClick={handlePrev} label={t('back')} styles='px-20 hover:px-24 bg-transparent !text-secondaryText border border-secondaryText' loading={loading} />
                <NormalButton onClick={handleNext} label={t('next')} styles='px-20 hover:px-24' loading={loading} />
            </div>
        </div>
    )
}


export default Step3