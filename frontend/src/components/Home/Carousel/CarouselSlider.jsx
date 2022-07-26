import React from "react";
import { Carousel } from "flowbite-react";
import { Button } from "bootstrap";

const CarouselData = [
  {
    Image: "https://m.media-amazon.com/images/I/61YuJJ7PMwL._SX3000_.jpg",
  },
  {
    Image: "https://m.media-amazon.com/images/I/61MtKclTZIL._SX3000_.jpg",
  },
  {
    Image: "https://m.media-amazon.com/images/I/61yWNrPmB-L._SX3000_.jpg",
  },
  {
    Image: "https://m.media-amazon.com/images/I/61BFazitqUL._SX3000_.jpg",
  },
  {
    Image: "https://m.media-amazon.com/images/I/610Tq8M7P+L._SX3000_.jpg",
  },
  {
    Image: "https://m.media-amazon.com/images/I/61Bo0+AnJoL._SX3000_.jpg",
  },
];
export default function CarouselSlider() {
  return (
    <div className="mx-4 h-36 sm:h-44 md:h-56 lg:h-76 xl:h-96">
      <Carousel>
        {CarouselData.map((value, key) => (
          <div key={key} className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src={value.Image}
              className="absolute left-0 top-0 w-full h-auto"
              alt=""
            />
          </div>  
        ))}
      </Carousel>
    </div>
  );
}
