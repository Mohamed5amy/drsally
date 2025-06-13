"use client"

import NormalButton from '@/components/custom/NormalButton';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Step1 = () => {

    const router = useRouter()
    const [service, setService] = useState(0)

    const handleNext = () => {
        if(service === 0) {
            toast.error('Please select a service')
        } else {
            localStorage.setItem('service', JSON.stringify(service))
            router.push('/appointments?step=2')
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
                        service={service}
                        number={item.id}
                        onBookClick={() => setService(item.id)}
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