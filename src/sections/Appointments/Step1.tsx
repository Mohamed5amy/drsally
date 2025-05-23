"use client"

import NormalButton from '@/components/custom/NormalButton';
import Card from '@/components/ui/Card';
import { useRouter } from 'next/navigation';

const Step1 = () => {

    const router = useRouter()

    const handleNext = () => {
        router.push('/appointments?step=2')
    }
    
    return (
        <div className='container' data-aos="fade-up">
            <div className='flex flex-col md:flex-row lg:flex-col gap-4 mb-16'>
                <Card
                    title="Example service"
                    description="Description of your service"
                    duration="1 hour"
                    onBookClick={() => console.log('Book clicked')}
                />
                <Card
                    title="Example service"
                    description="Description of your service"
                    duration="1 hour"
                    onBookClick={() => console.log('Book clicked')}
                />
            </div>
            <div className='flex justify-end'>
                <NormalButton label='Next' styles='px-20 hover:px-24 w-full sm:w-fit' onClick={handleNext} />
            </div>
        </div>
    )
}



export default Step1