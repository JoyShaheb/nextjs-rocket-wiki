"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ICarouselProps {
  images: string[];
}

const Carousel: FC<ICarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => setActiveIndex(index);

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            className={`${
              activeIndex === index ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item="active"
            key={index}
          >
            <Image
              src={image}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
              width={600}
              quality={100}
              height={1000}
              // placeholder="blur"
              // blurDataURL=""
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            type="button"
            className={`w-3 h-3 ${
              activeIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            } rounded-full focus:outline-none`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleSlideChange(index)}
            key={index}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          handleSlideChange((activeIndex - 1 + images.length) % images.length)
        }
      >
        <ChevronLeftIcon
          style={{
            padding: "2px",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
          className="w-7 text-gray-800"
          strokeWidth={2}
        />
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() => handleSlideChange((activeIndex + 1) % images.length)}
      >
        <ChevronRightIcon
          style={{
            padding: "2px",
            backgroundColor: "white",
            borderRadius: "100%",
          }}
          className="w-7 text-gray-800"
        />
      </button>
    </div>
  );
};

export default Carousel;
