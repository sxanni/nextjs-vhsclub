import React from 'react'
import Contact from '../components/Contact'
import HeroContact from '../components/HeroContact'

function contact() {
  return (
      <div>
        <HeroContact heading='Lets Chat' message='Leave your name, email and query and I will respond within the day! or just say hi :D' />
        
        <Contact/>
    </div>
  )
}

export default contact