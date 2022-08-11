import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length; //get current length of the slides

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className=" border-2 border-y-0 p-1 mx-20 my-10 font text-2xl font-bold flex items-center justify-center ">
        Gallery
      </h1>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duation-5000"
                  : "opacity-0 hidden ease-in duation-5000" //hide and 0 opacity the non current images
              }
            >
              <div className="relative flex justify-center">
                <BsArrowLeftCircleFill
                  onClick={prevSlide}
                  className="absolute top-[50%] left-[5%] text-orange-400/75 cursor-crosshair select-none z-[2]"
                  size={50}
                />

                {/* if index is on the current slide then hide then display it, this hides the other images that arent currently displayed */}
                {index === current && (
                  <Image
                  unoptimized 
                    className=" absolute slider p-20 border border-orange-400"
                    src={slide.image}
                    alt="/"
                    width="1040"
                    height="600"
                    objectFit="cover"
                  />
                )}
                <BsArrowRightCircleFill
                  onClick={nextSlide}
                  className="absolute top-[50%] right-[5%] text-orange-400/75 cursor-crosshair select-none z-[2]"
                  size={50}
                />
              </div>
              <p className="text-black text-2xl font-bold flex justify-center bg-orange-400">{slide.title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Slider;
