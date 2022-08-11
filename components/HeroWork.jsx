import React from "react";
import {HiOutlineArrowNarrowUp} from "react-icons/hi";
import {TbArrowBottomCircle} from "react-icons/tb";

function HeroWork({heading,message,button}) {
  return (
    <div className="flex items-center justify-center 
    h-screen mb-1 bg-fixed bg-center work-img ">
      
      {/* overlay with absolute and and positioned accordingly on all 4 edges of view port. opacity is 70 */}
      <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />

        <div className="flex flex-col mt-36">
        <div className="p-5 text-white  z-[2]  mt-[-10rem]"> 
            <h2 className="text-5xl font-bold my-3">{heading}</h2>
            <p className="py-5 mb-1 text-xl">{message}</p>
            <form action="submit">
            {/* <input type="email" name="" id="" placeholder=" Email" className="my-2 rounded mr-8 h-8 w-72" /> */}
            <button className="my-2 py-1 px-5 sm:ml-8 ml-1 bg-black/30 rounded border">{button}</button>
            </form>
        </div>
          <br/>
        <div className="text-white  z-[2] flex items-center justify-center mt-20">
        {/* <HiOutlineArrowNarrowUp  size={40} style={{color:`white`}} /> */}
        <TbArrowBottomCircle  size={40} style={{color:`white`}} />
        </div>
        </div>

    </div>
  )
}

export default HeroWork