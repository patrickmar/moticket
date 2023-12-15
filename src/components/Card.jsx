import React from 'react';
import { p11 } from '../assets';
import { FaHome, FaPaypal } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Card = ({ heading, image }) => {
  return (
    <div>
      <div className="flex flex-start mb-14">
        <h1 className="font-bold text-[24px] mx-12 mt-12">{heading}</h1>
      </div>
      <div className="mx-auto mt-11 w-80 transform overflow-hidden mb-12 rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-50 w-full object-cover object-center" src={image} />
        <div className="p-4">
          <h2 className="flex gap-4 mb-2 text-lg font-medium  text-gray-900">
            <FaHome /> Rock Lagos
          </h2>
          <p className="flex gap-4 mb-2 text-base  text-gray-700">
            <FaLocationDot /> Lagos
          </p>
          <div className="flex gap-4 items-center">
            <FaPaypal className="" />
            <p className="mr-2 text-lg font-semibold text-gray-900">$20.00</p>
            <p>-</p>
            <p className="text-base  font-semibold text-gray-900  dark:text-gray-900">
              $25.00
            </p>
          </div>
          <Link to={'/details'}>
            <button>Get Ticket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
