import { CircleX } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import NormalButton from './NormalButton'
import { useTranslations } from 'next-intl'

const LogoutPopup = ({setActive} : {setActive : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const t = useTranslations();
    const signOut = useSignOut()

    const handleSignOut = () => {
      signOut()
      window.location.reload()
    }
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/70 z-[2]' data-aos="fade-in">
        <div className='py-12 p-10 rounded-2xl bg-white relative flex flex-col items-center text-center w-[300px] sm:w-[500px]'>
            <Image src={"/logout.svg"} alt='Logout Icon' width={112} height={112} />
            <p className="font-semibold text-xl my-5 mb-2">{t('logout_title')}</p>
            <p className="font-medium mb-5">{t('logout_desc')}</p>
            <div className='flex gap-2'>
                <NormalButton  styles="px-8 py-3 sm:px-12 sm:py-4 w-full sm:w-fit rounded-3xl text-primary items-center border-primary border hover:text-textLight hover:border-transparent" onClick={() => setActive(false)} label={t('logout_cancel')} />
                <NormalButton styles="px-8 py-3 sm:px-12 sm:py-4 w-full sm:w-fit rounded-3xl bg-secondary text-textLight items-center  border-secondary border hover:text-textLight" onClick={handleSignOut} label={t('logout_confirm')} />
            </div>
            {/* Close Icon */}
            <div className="absolute right-6 top-6 cursor-pointer text-textSecondary transition-colors hover:text-secondary" onClick={() => setActive(false)}> <CircleX /> </div>
        </div>
    </div>
  )
}

export default LogoutPopup