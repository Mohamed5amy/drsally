'use client';

import NormalButton from '@/components/custom/NormalButton';
import Card from '@/components/ui/Card';
import { services } from '@/data/services';
import { useAppointmentStore } from '@/store/useAppointmentStore';
import { usePathname, useRouter } from 'next/navigation';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

const Step1 = ({bookings} : {bookings : number}) => {
  const router = useRouter();
  const { data, setData } = useAppointmentStore();
  const isAuth = useIsAuthenticated();
  const pathname = usePathname();
  const t = useTranslations();

  const handleNext = () => {
    if (data.service === -1) {
      toast.error(t('please_select_service')); // i18n translation key
    } else {
      if (isAuth) {
        router.push('/appointments?step=2');
      } else {
        toast(t('login_first')); // i18n translation key
        Cookies.set('url', pathname);
        router.push('/login');
      }
    }
  };

  return (
    <div className='container' data-aos='fade-up'>
      <div className='flex flex-col gap-4 mb-16'>
        {services.map((item) => {
          if (bookings >= 1 && item.id == 0) {
            return null;
          } else {
            return (
              <Card
                key={item.id}
                title={item.title}
                titleAr={item.titleAr}
                description={item.description}
                descriptionAr={item.descriptionAr}
                service={data.service}
                number={item.id}
                image={item.image}
                onBookClick={() =>
                  item.id === data.service
                    ? setData({ service: -1 })
                    : setData({ service: item.id })
                }
                duration={item.duration}
                durationAr={item.durationAr}
                price={bookings == 1 ? item.discountPrice : item.price}
              />
            )
          }
        })}
      </div>
      <div className='flex justify-end'>
        <NormalButton
          label={t('next')}
          styles='px-20 hover:px-24 w-full sm:w-fit'
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Step1;
