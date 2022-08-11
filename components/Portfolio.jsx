import React from 'react';
import Image from 'next/image';

function Portfolio() {
  return (
    <div>
        <h1>
            <div>
                <div>
                    <Image src='https://66.media.tumblr.com/2d9b12ffd8e2a1fd426eebf06b38534c/tumblr_ovvh8xtjb61u5k06fo1_1280.jpg'
                     unoptimized 
                     alt='/'
                    //  layout='responsive'
                     width='677'
                     height='451'
                     objectFit='cover'
                     />
                </div>
                <div>
                    <Image 
                     unoptimized 
                    src='https://66.media.tumblr.com/2cba495b13768a1cabdd102063680c3a/aa2f8e7bf4fd30a3-c5/s540x810/0af37ccbe75a1ca7dbf33a82b6c96bd36cd400d8.gif'
                     alt='/'
                    //  layout='responsive'
                     width='215'
                     height='217'
                     objectFit='cover'
                     />
                </div>
                
            </div>
        </h1>
    </div>
  )
}

export default Portfolio