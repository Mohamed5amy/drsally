
import { quotation } from '@/icons'
import { getTranslations } from 'next-intl/server';

const Quote = async () => {
  const t = await getTranslations();
  return (
    <div className='py-20 bg-[rgba(251,226,214,0.20)]'>
        <div className='container text-center relative'>
            <h3 className='mb-5 text-3xl font-bold relative'>
                {t('about_quote_text')}
                <span className='absolute -top-7 -left-2'> {quotation} </span>
                <span className='absolute -bottom-7 -right-2 block rotate-180'> {quotation} </span>
            </h3>
            <p className='text-2xl font-semibold text-secondaryText'> – {t('about_quote_author')} </p>
            {/* Qoutes */}
        </div>
    </div>
  )
}

export default Quote