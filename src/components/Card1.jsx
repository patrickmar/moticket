import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { p1, p2, p3, p4, p5, p6, p7 } from '../assets';
import { FaLocationDot, FaTicket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaMoneyBill } from 'react-icons/fa';

const data = [
  {
    title: 'The Idea event',
    location: 'Lagos',
    img: p1,
    icon: FaTicket,
  },
  {
    title: 'The Idea event1',
    location: 'Lagos',
    price: 5,

    img: p2,
    icon: FaTicket,
  },
  {
    title: 'The Idea event2',
    location: 'Lagos',
    price: 5,

    img: p3,
    icon: FaTicket,
  },
  {
    title: 'Event 4',
    location: 'Lagos',
    price: 5,

    img: p4,
    icon: FaTicket,
  },
  {
    title: 'event 5',
    location: 'Lagos',
    price: 5,

    img: p5,
    icon: FaTicket,
  },
  {
    title: 'event6',
    location: 'Lagos',
    price: 5,

    img: p6,
    icon: FaTicket,
  },
  {
    title: 'The Idea event7',
    location: 'Lagos',

    img: p7,
    icon: FaTicket,
    price: 5,
  },
];

const Card1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-gray-200">
      <h1 className="absolute mt-[-150px] font-semibold text-[24px]">
        Events This Week
      </h1>

      <div className="w-3/4 m-auto mt-56 bg-gray-100 rounded-xl shadow-xl border-gray-500">
        <div className="mt-20 ">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="bg-gray-200 h-[450px] text-black rounded-xl"
              >
                <div className="h-56  rounded-xl flex justify-center mb-4 items-center">
                  <img src={d.img} alt="" className="h-60 w-full" />
                </div>
                <div className="flex  items-start gap-4 p-2 ">
                  <FaTicket /> <p>{d.title}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div className="flex  items-start gap-4 p-2 ">
                  <FaLocationDot /> <p>{d.location}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div className="flex  items-start gap-4 p-2 ">
                  <FaMoneyBill /> <p>£{d.price}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div lassName="flex  items-start ">
                  {' '}
                  <Link to="/cart">
                    <button className="bg-secondary p-1 text-white rounded-xl">
                      Get Ticket
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Card1;
