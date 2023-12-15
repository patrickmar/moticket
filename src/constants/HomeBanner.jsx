import React from 'react';
import Banner from '../components/Banner';
import { card5 } from '../assets';

const HomeBanner = () => {
  return (
    <div>
      <Banner
        type1={'UNLOCK THE FUN'}
        type2={'YOUR TICKET TO UNFORGETTABLE EVENTS'}
        picture={card5}
      />
    </div>
  );
};

export default HomeBanner;
