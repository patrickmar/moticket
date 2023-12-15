import React from 'react';
import Banner from '../components/Banner';
import Category from './Category';
import WeekCategory from './WeekCategory';
import HomeBanner from '../constants/HomeBanner';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      <WeekCategory />
    </div>
  );
};

export default Home;
