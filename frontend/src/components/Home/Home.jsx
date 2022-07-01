import React from 'react'
import Navbar from './Navbar/Navbar'
import Offers from './Offers/Offers'
import CarouselSlider from './Carousel/CarouselSlider';

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselSlider/>
      <Offers />
    </div>
  )
  
}
