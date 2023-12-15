import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import { card5, p12 } from '../assets';

const Events = () => {
  return (
    <div>
      <Banner
        type1={'EVENTS WITH CLASS'}
        type2={'BUY YOUR TICKETS WITH EASE'}
        picture={card5}
      />
      <Card heading={'All Events'} image={p12} />
    </div>
  );
};

export default Events;
