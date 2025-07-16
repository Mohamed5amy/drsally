import AnimatedTitle from '@/components/AnimatedTitle'
import Button from '@/components/custom/Button'
import Parallax from '@/components/Parallax'
import { calenderIcon } from '@/icons'
import React from 'react'

const Remotely = () => {
  return (
    <div className='bg-textPrimary'>
      <div className='container flex flex-col md:flex-row items-center gap-16 py-20'>
          <div className='flex-1'>
            <Parallax direction='up' end='bottom center'>
              <AnimatedTitle className='text-primaryText mb-2 text-[24px] md:text-[32px] font-bold'>In-person and remote options</AnimatedTitle>
              <p className='text-xl text-secondaryText mb-10'>
              My office is conveniently located in Singapore. Can’t make it into the office? No worries – I’ve got you covered with teletherapy. You'll get the same high-quality care and personal attention, right from the comfort of your own home.
              </p>
              <Button label="Schedule Your Free Consultation" icon={calenderIcon} />
            </Parallax>
          </div>
          <div className='flex-1'>
            <Parallax direction='down' end='bottom center'>
              <div className='rounded-3xl overflow-hidden border-4 border-[#C8DCD7] grayscale'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44180.52394803417!2d6.143038949999999!3d46.20483005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c650693d0e2eb%3A0xa0b695357b0bbc39!2sGeneva%2C%20Switzerland!5e0!3m2!1sen!2seg!4v1752668436179!5m2!1sen!2seg" width="100%" height="340" loading="lazy"></iframe>
              </div>
            </Parallax>
          </div>
      </div>
    </div>
  )
}

export default Remotely