import Image from 'next/image';
import React from 'react';
import {FaInstagram} from 'react-icons/fa';

const InstagramImg = ({socialImg}) => {
  return (
    <div className='relative'>
        <Image style={{}} src={socialImg} className='w-full h-full' layout='responsive' width="1440"
                    height="600"
                    objectFit="cover" alt='/'/>
        {/* overlayss */}
        <div className='absolute top-0 right-0 bottom-0 left-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30}/></p>
        </div>
    </div>
  )
}

export default InstagramImg