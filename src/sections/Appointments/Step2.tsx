"use client"

import NormalButton from '@/components/custom/NormalButton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SimpleCard from '@/components/ui/SimpleCard';
import { services } from '@/data/services';
import { calenderIcon, clock } from '@/icons';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { format } from "date-fns";
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { get } from 'http';


const Step2 = () => {

    const {data , setData} = useAppointmentStore()
    const router = useRouter()

    const handleNext = () => {
        router.push('/appointments?step=3')
    }
    const handlePrev = () => {
        router.push('/appointments?step=1')
    }

    // Get Service
    const service = services.find(item => item.id === data.service)

    // Days
    const myDays = ["2025-06-21" , "2025-06-29"];
    const times : {start : string , end : string}[] = [{start : "10:00", end: "11:00"}, {start: "11:00", end: "12:00"}, {start: "12:00", end: "13:00"}];

    // Get Next Week Date
    function getNextWeekDate(dateString?: string): string {
        const date = dateString ? new Date(dateString) : new Date();
        date.setDate(date.getDate() + 7);
        return date.toISOString().split('T')[0]; // format: YYYY-MM-DD
    }
    
    // Get Next Month Date
    function getNextMonthDate(dateString?: string): string {
        const date = dateString ? new Date(dateString) : new Date();
        const currentDay = date.getDate();

        // Move to next month
        date.setMonth(date.getMonth() + 1);

        // Handle cases where next month has fewer days
        // (e.g., Jan 31 → Feb 28/29)
        if (date.getDate() < currentDay) {
            // date auto-adjusted to last day of month
        }

        return date.toISOString().split('T')[0]; // format: YYYY-MM-DD
    }
    
    return (
        <div className='container' data-aos="fade-up">
            {/* Card */}
            <SimpleCard 
                title={service?.title}
                description={service?.description}
                duration={service?.duration}
                price={service?.price}
            />
            {/* Time */}
            <div className='flex items-center justify-between mt-12 mb-6 flex-col md:flex-row'>
                <h4 className='text-primaryText text-lg md:text-xl lg:text-2xl font-semibold'> Select Date & Time </h4>
                <h4 className='text-secondaryText md:text-lg lg:text-xl font-semibold'> Time Zone : Central European Time (CET) </h4>
            </div>
            <div className='p-5 bg-textPrimary rounded-3xl flex items-center gap-4 mb-14 flex-col md:flex-row'>
                {/* Date Picker */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="date" className="md:text-xl font-bold">
                    Select Date
                    </label>
                    <Select value={data.day} onValueChange={(value) => setData({day: value})}>
                        <SelectTrigger className='p-3 h-12 font-semibold ps-11 rounded-xl bg-bg border border-[#C8DCD7] relative'>
                            <SelectValue placeholder="Available Dates" />
                            <span className='absolute left-3 text-primary'> {calenderIcon} </span>
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                            {myDays.map((day, index) => (
                                <SelectItem key={index} value={day} className='transition-colors hover:bg-bg'>
                                    {format(day , "EEE, d MMM  yyyy")}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                {/* Time Picker */}
                <div className="flex flex-col gap-4 flex-1 cursor-pointer w-full">
                    <label htmlFor="date" className="md:text-xl font-bold">
                    Select Slot
                    </label>
                    <Select disabled={!data.day}>
                        <SelectTrigger className='p-3 h-12 font-semibold ps-11 rounded-xl bg-bg border border-[#C8DCD7] relative'>
                            <SelectValue placeholder="Available Slots" />
                            <span className='absolute left-3 text-primary'> {clock} </span>
                        </SelectTrigger>
                        <SelectContent className='bg-white'>
                            {times.length > 0 ? times.map((day, index) => (
                                <SelectItem key={index} value={day.start} className='transition-colors hover:bg-bg'>
                                    {day.start} - {day.end}
                                </SelectItem>
                            )) : <p className='p-4 font-semibold'> Sorry, Saly has no available slots in that day, Kindly try another day. </p> }
                        </SelectContent>
                    </Select>
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