import Background from '@/sections/About/Background'
import Header from '@/sections/About/Header'
import MyPhilosophy from '@/sections/About/MyPhilosophy'
import Quote from '@/sections/About/Quote'
import Testimonials from '@/sections/Services/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <MyPhilosophy />
      <Testimonials />
      <Background />
      <Quote />
    </div>
  )
}

export default page