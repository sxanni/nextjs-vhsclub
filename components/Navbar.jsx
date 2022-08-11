import Link from "next/link";
import React,{useEffect, useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  //handle nav tate then set toggle to switch it to opposite state
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [txtColor, setTxtColor] = useState('white');
  
  
  const toggleNav = () => {
  setNav(!nav)
};

useEffect(()=> { //USE EFFECT TO HANDLE NAVBAR AND HEADING COLOR CHANGE ON SCROLL
  const changeColor = () => {
    if(window.scrollY >= 50) { //if user scrolls down over 90%
      setColor('#ffffff');
      setTxtColor('#000000'); //change the color
    } else {
      setColor('transparent');
      setTxtColor('#ffffff'); //else leave as this
    }
  }
  window.addEventListener("scroll", changeColor ) //Event listener to listen for or detect the scroll and then run the use effect function
}, []); //dependency array

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" max-w-[1240px] flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <h1 style={{color: `${txtColor}`}} className="font-bold text-orange-500 text-4xl cursor-crosshair ">[ <span className="">VHSC</span> ]</h1>
        </Link>
        <ul style={{color: `${txtColor}`}}  className="hidden sm:flex">
          <li className="p-4 mx-6">
            <Link href="/#gallery" >
              <h1 className="cursor-crosshair">Gallery</h1>
            </Link>
          </li>
          <li className="p-4 mx-6">
            <Link href="/work">
              <h1 className="cursor-crosshair">Work</h1>
            </Link>
          </li>
          <li className="p-4 mx-6">
            <Link href="/contact">
              <h1 className="cursor-crosshair">Contact</h1>
            </Link>
          </li>
        </ul>

        {/* mobile button */}
        {/* this hides the mobile nav for any size above small */}
        <div onClick={toggleNav} className=" cursor-pointer block sm:hidden z-10 hover:font-2xl"> 
          {nav ? <AiOutlineClose size={20} style={{color: `orange`}} /> 
          : <AiOutlineMenu size={20} style={{color: `${txtColor}`}} />}
        </div>

        {/* mobile menu */}
        <div 
        className={
          nav 
          ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
          : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
          <ul className="text-5xl">
            <li className=" my-8 font-bold" >
              <Link href="/#gallery"  >
                <h1 onClick={toggleNav} className="cursor-crosshair">Gallery</h1>
              </Link>
            </li>
            <li className=" my-8 font-bold">
              <Link href="/work">
                <h1 onClick={toggleNav} className="cursor-crosshair">Work</h1>
              </Link>
            </li>
            <li className=" my-8 font-bold">
              <Link href="/contact">
                <h1 onClick={toggleNav} className="cursor-crosshair">Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;