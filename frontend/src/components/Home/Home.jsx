import React from 'react'
import Navbar from './Navbar/Navbar'
import Offers from './Offers/Offers'
import CarouselSlider from './Carousel/CarouselSlider';
import Multi_c from './Multi_c/Multi_c'

export default function Home() {
  return (
    <div className="bg-neutral-50">
      <Navbar />
      <CarouselSlider/>
      <Offers />
      <Multi_c />
    </div>
  )
  
}
