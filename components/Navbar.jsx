import Link from "next/link";
import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  //handle nav tate then set toggle to switch it to opposite state
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
  setNav(!nav)
}

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" max-w-[1240px] flex justify-between items-center p-4 text-white ">
        <Link href="/">
          <h1 className="font-bold text-4xl ">VHSC</h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 mx-6">
            <Link href="/#gallery">
              <h1>Gallery</h1>
            </Link>
          </li>
          <li className="p-4 mx-6">
            <Link href="/portfolio">
              <h1>Work</h1>
            </Link>
          </li>
          <li className="p-4 mx-6">
            <Link href="/contacts">
              <h1>Contact</h1>
            </Link>
          </li>
        </ul>

        {/* mobile button */}
        {/* this hides the mobile nav for any size above small */}
        <div className="block sm:hidden z-10"> 
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile menu */}
        <div 
        className={nav 
          ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" 
        :"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"}>
          <ul className="text-5xl">
            <li className=" my-8" >
              <Link href="/#gallery">
                <h1>Gallery</h1>
              </Link>
            </li>
            <li className=" my-8">
              <Link href="/portfolio">
                <h1>Workk</h1>
              </Link>
            </li>
            <li className=" my-8">
              <Link href="/contacts">
                <h1>Contact</h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
