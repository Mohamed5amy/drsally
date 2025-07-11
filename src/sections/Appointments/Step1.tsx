"use client"

import NormalButton from '@/components/custom/NormalButton';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { toast } from 'react-toastify';

const Step1 = () => {

    const router = useRouter()
    const {data , setData} = useAppointmentStore()
    const isAuth = useIsAuthenticated()
    const pathname = usePathname()
    console.log(pathname) 
    
    const handleNext = () => {
        if(data.service === 0) {
            toast.error('Please select a service')
        } else {
            if (isAuth) {
                router.push('/appointments?step=2')
            } else {
                toast("Kindly Login First")
                localStorage.setItem("url", pathname)
                router.push("/login")
            }
        }
    }
    
    return (
        <div className='container' data-aos="fade-up">
            <div className='flex flex-col md:flex-row lg:flex-col gap-4 mb-16'>
                {services.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        service={data.service}
                        number={item.id}
                        onBookClick={() => {item.id === data.service ? setData({service: 0}) : setData({service: item.id})}}
                        duration={item.duration}
                        price={item.price}
                    />
                ))}
            </div>
            <div className='flex justify-end'>
                <NormalButton label='Next' styles='px-20 hover:px-24 w-full sm:w-fit' onClick={handleNext} />
            </div>
        </div>
    )
}



export default Step1