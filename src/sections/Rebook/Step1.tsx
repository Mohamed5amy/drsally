"use client"

import NormalButton from '@/components/custom/NormalButton';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { useParams, usePathname, useRouter } from 'next/navigation';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

const Step1 = () => {

    const router = useRouter()
    const {data , setData} = useAppointmentStore()
    const isAuth = useIsAuthenticated()
    const pathname = usePathname()
    const {id} = useParams()
    const t = useTranslations()
    
    const handleNext = () => {
        if(data.service === -1) {
            toast.error('Please select a service')
        } else {
            if (isAuth) {
                router.push(`/appointments/${id}?step=2`)
            } else {
                toast("Kindly Login First")
                Cookies.set("url", pathname)
                router.push("/login")
            }
        }
    }
    
    return (
        <div className='container' data-aos="fade-up">
            <div className='flex flex-col md:flex-row lg:flex-col gap-4 mb-16'>
                {services.map((item) => {
                    if (data.service == 0) {
                        if (item.id == 0) {
                            return (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    titleAr={item.titleAr}
                                    description={item.description}
                                    descriptionAr={item.descriptionAr}
                                    service={data.service}
                                    number={item.id}
                                    onBookClick={() => {item.id === data.service ? setData({service: -1}) : setData({service: item.id})}}
                                    duration={item.duration}
                                    durationAr={item.durationAr}
                                    price={item.price}
                                />
                            )
                        }
                    } else if (data.service == 2) {
                        if (item.id == 2) {
                            return (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    titleAr={item.titleAr}
                                    description={item.description}
                                    descriptionAr={item.descriptionAr}
                                    service={data.service}
                                    number={item.id}
                                    onBookClick={() => {item.id === data.service ? setData({service: -1}) : setData({service: item.id})}}
                                    duration={item.duration}
                                    durationAr={item.durationAr}
                                    price={item.price}
                                />
                            )
                        }
                    } else {
                        if (item.id != 0 && item.id != 2) {
                            return (
                                <Card
                                    key={item.id}
                                    title={item.title}
                                    titleAr={item.titleAr}
                                    description={item.description}
                                    descriptionAr={item.descriptionAr}
                                    service={data.service}
                                    number={item.id}
                                    onBookClick={() => {item.id === data.service ? setData({service: -1}) : setData({service: item.id})}}
                                    duration={item.duration}
                                    durationAr={item.durationAr}
                                    price={item.price}
                                />
                            )
                        }
                    }
                })}
            </div>
            <div className='flex justify-end'>
                <NormalButton label={t('Next')} styles='px-20 hover:px-24 w-full sm:w-fit' onClick={handleNext} />
            </div>
        </div>
    )
}



export default Step1