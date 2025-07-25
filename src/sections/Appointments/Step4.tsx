"use client"

import { bookRequest, getCheckoutUrl, questionsRequest } from '@/APIs/appointments';
import NormalButton from '@/components/custom/NormalButton';
import { services } from '@/data/services';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { toast } from 'react-toastify';


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


const Step4 = ({bookings} : {bookings : number}) => {

    const router = useRouter()
    const {data } = useAppointmentStore()

    const t = useTranslations()

    const user : {token : string} | null = useAuthUser()
    const [url, setUrl] = useState("")

    // Redirect to Stripe Checkout if url is available
    useEffect(() => {
        if (url) {
            window.location.href = url;
        }
    }, [url]);

    // Get checkout url 
    useEffect(() => {
        const fetchCheckoutUrl = async () => {
            const res = await  getCheckoutUrl(user?.token || "" , data.booking_id || 0)
            if (res) {
                setUrl(res.checkout_url)
            } else {
                toast.error("Failed to get checkout URL")
            }
        }
        if (data.booking_id) {
            fetchCheckoutUrl()
        } else {
            toast.error("Booking ID is missing")
        }
    } , [data.booking_id])

    return (
    <div className='container' data-aos="fade-up">
        <div className='p-5 bg-textPrimary rounded-3xl mb-4 title'>
            {t("You will be redirected to Stripe Checkout to complete your payment")}
        </div>
    </div>
  )
}

export default Step4