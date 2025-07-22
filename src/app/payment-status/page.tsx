import NormalButton from '@/components/custom/NormalButton'
import Step5 from '@/sections/Appointments/Step5'
import Link from 'next/link'
import React from 'react'

const page = async ({searchParams} : {searchParams : Promise<{status: string}>}) => {
    const {status} = await searchParams
  return (
    <div className='py-12 pb-16'>
        {status === "success" ? <Step5 /> : <Failed />}
    </div>
  )
}

const Failed = () => {
    return (
        <div className='py-4 px-8 sm:py-10 sm:px-20 bg-textPrimary max-w-[700px] mx-auto flex items-center justify-center flex-col'>
            <h2 className='text-4xl mb-2 font-semibold'>Payment Failed</h2>
            <p className='text-center mb-4 text-lg opacity-70'>Your payment was not successful. <br /> You can try again or contact me.</p>
            <div className='flex items-center gap-4'>
                <Link href='/contact'><NormalButton label='Contact Me' /></Link>
                <Link href='/appointments?step=4'><NormalButton label='Pay Now' /></Link>
            </div>
        </div>
    )
}

export default page