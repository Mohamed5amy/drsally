import { quotation } from '@/icons'
import React from 'react'

const Quote = () => {
  return (
    <div className='py-20 bg-[rgba(251,226,214,0.20)]'>
        <div className='container text-center relative'>
            <h3 className='mb-5 text-3xl font-bold relative'>
                I believe that everyone is trying their best to become the best version of themselves. I’m on a fulfilling journey of holding their hand if they allow me.
                <span className='absolute -top-7 -left-2'> {quotation} </span>
                <span className='absolute -bottom-7 -right-2 block rotate-180'> {quotation} </span>
            </h3>
            <p className='text-2xl font-semibold text-secondaryText'> – Sally Mounir </p>
            {/* Qoutes */}
        </div>
    </div>
  )
}

export default Quote