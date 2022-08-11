import React from 'react'
import InstagramImg from './InstagramImg'
import IgImg1 from '../public/assets/social/ig-snow.jpg';
import IgImg2 from '../public/assets/social/ig-back.jpg';
import IgImg3 from '../public/assets/social/ig-bee.jpg';
import IgImg4 from '../public/assets/social/ig-girl.jpg';
import IgImg5 from '../public/assets/social/ig-mount.jpg';
import IgImg6 from '../public/assets/social/ig-night.png';

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mz-auto text-center py-24'>
        <p className='text-2xl font-bold'>follow me on Instagram</p>
        <p className='pb-4'>@x234.wav</p>
        <div className='grid grid-cols-2 md:grid-col-3 lg:grid-col-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram