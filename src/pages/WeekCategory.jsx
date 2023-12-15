import React from 'react';
import Card from '../components/Card';
import { p11 } from '../assets';

const WeekCategory = () => {
  return (
    <div>
      <Card heading={'Events This Week'} image={p11} />
    </div>
  );
};

export default WeekCategory;
