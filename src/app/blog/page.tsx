import Articles from '@/sections/Blog/Articles'
import Header from '@/sections/Blog/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header label='Blog' />
        <Articles />
    </div>
  )
}

export default page