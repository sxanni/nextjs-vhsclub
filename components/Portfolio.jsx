import React from 'react';
import Image from 'next/image';

function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold tect-2xl p-4 border-2 border-y-0 text-2xl  mx-20 my-10'> Weekly Top 5 </h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'> 
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image src='https://media2.giphy.com/media/fZ8EJNc1y0f5e/giphy.webp?cid=ecf05e47ssu9lke031xqdy8tvhrlrbofjh5k4tp5g5tw579b&rid=giphy.webp&ct=g'
                     unoptimized 
                     alt='/'
                    //  layout='responsive'
                     width='577'
                     height='651'
                     objectFit='cover'
                     objectPosition='center bottom'

                     
                     />
                </div>
                <div>
                    <Image 
                     unoptimized 
                    src='https://www.syfy.com/sites/syfy/files/styles/scale--1200/public/2022/01/batman_returns_ver3.jpg'
                     alt='/'
                    //  layout='responsive'
                     width='215'
                     height='217'
                     objectFit='cover'
                     />
                </div>
                <div>
                    <Image 
                     unoptimized 
                    src='https://preview.redd.it/8651ghv170x61.jpg?width=500&format=pjpg&auto=webp&s=ea5d4ccb499fb6c856a2f97178557b8bdc5ee7af'
                     alt='/'
                    //  layout='responsive'
                     width='215'
                     height='217'
                     objectFit='cover'
                     objectPosition='center top'
                     />
                </div>
                <div>
                    <Image 
                     unoptimized 
                    src='https://lwlies.com/wp-content/uploads/2017/03/Jurassic-Park-900x0-c-default.jpg'
                     alt='/'
                    //  layout='responsive'
                     width='215'
                     height='217'
                     objectFit='cover'
                     objectPosition='center top'
                     />
                </div>
                <div>
                    <Image 
                     unoptimized 
                    src='https://www.indiewire.com/wp-content/uploads/2017/05/the-matrix-1999.png?w=445'
                     alt='/'
                    //  layout='responsive'
                     width='215'
                     height='217'
                     objectFit='cover'
                     objectPosition='center'
                     />
                </div>
                
            </div>
      
    </div>
  )
}

export default Portfolio