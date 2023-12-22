import React from 'react';

const Banner = ({ type1, type2, picture }) => {
  return (
    <div className="rounded-xl ">
      <h1 className="absolute  md:mt-56 mt-[80px] font-inter font-semibold md:text-[50px] text-[24px] text-white xs:leading-[60.8px] leading-[66.8px] w-full">
        {type1}
      </h1>
      <p className="absolute italic  md:mt-80 mt-[130px] font-inter font-semibold md:text-[50px] text-[18px] text-white md:leading-[60.8px] leading-[30.8px] w-full">
        {type2}{' '}
      </p>
      <div>
        <img
          src={picture}
          alt="card"
          className="md:h-[600px] w-full object-cover"
        />
      </div>
      <div className="  absolute  md:mt-[-112px] mt-[-60px]  w-[50%] lg:ml-[380px] md:ml-[200px] ml-[100px]">
        <input
          type="search"
          id="search-dropdown"
          className="block  p-6 w-full z-20 md:py-4 px-2 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-l-gray-700  dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search the Scene: Events, Venues,  Artists and Beyond…. x"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 md:py-4 px-2 py-2  text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
