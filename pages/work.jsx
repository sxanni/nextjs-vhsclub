import React from 'react';
import HeroWork from '../components/HeroWork';
import Portfolio from '../components/Portfolio';

const work = () => {
  return (
    <div>
        <HeroWork heading='My Movies' message='Movies ive watched and rated' button='Order' />
        <Portfolio/>
    </div>
  )
}

export default work