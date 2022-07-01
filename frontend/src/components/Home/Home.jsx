import React from 'react'
import Navbar from './Navbar/Navbar'
import Offers from './Offers/Offers'
import CarouselSlider from './Carousel/CarouselSlider';
import { CarouselData } from './Carousel/CarouselData';

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselSlider slides={CarouselData}/>
      <Offers />
    </div>
  )
  
}
