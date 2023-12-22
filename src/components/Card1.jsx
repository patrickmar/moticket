import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { p1, p2, p3, p4, p5, p6, p7 } from '../assets';
import { FaLocationDot, FaTicket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsBuildings } from 'react-icons/bs';

const data = [
  {
    title: 'The Idea event',
    location: 'Lagos',
    img: p1,
    price: 5,
    icon: FaTicket,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
  },
  {
    title: 'The Idea event1',
    location: 'Lagos',
    price: 5,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p2,
    icon: FaTicket,
  },
  {
    title: 'The Idea event2',
    location: 'Lagos',
    price: 5,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p3,
    icon: FaTicket,
  },
  {
    title: 'Event 4',
    location: 'Lagos',
    price: 5,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p4,
    icon: FaTicket,
  },
  {
    title: 'event 5',
    location: 'Lagos',
    price: 5,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p5,
    icon: FaTicket,
  },
  {
    title: 'event6',
    location: 'Lagos',
    price: 5,
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p6,
    icon: FaTicket,
  },
  {
    title: 'The Idea event7',
    location: 'Lagos',
    date: new Date(2023, 11, 16), // December is represented by 11 (0-indexed)
    img: p7,
    icon: FaTicket,
    price: 5,
  },
];

const Card1 = () => {
  const CustomNextArrow = (props) => {
    const { onClick } = props;

    return (
      <div
        className="slick-next-container "
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <button
          className="slick-next"
          style={{
            background: 'white', // Set the background color to white
            borderRadius: '50%', // Optional: To make it circular
            height: '60px',
            width: '60px',
            border: '2px solid black', // Set border color and width
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClick}
        >
          {/* MdArrowRight icon from react-icons */}
          <MdArrowForwardIos
            style={{ fontSize: '24px', color: 'black' }}
            className="mx-auto"
          />
        </button>
        <div style={{ fontSize: '12px', color: 'black', marginTop: '5px' }}>
          See more
        </div>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow className="text-primary" />,
  };

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <section className="">
      <h1 className="absolute mt-[-150px] font-semibold text-[24px] ml-8">
        Trending Events
      </h1>

      <div className="w-3/4 m-auto mt-56 rounded-xl  border">
        <div className="mt-20 ">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div
                key={index}
                className="bg-gray-200 h-[450px] text-black rounded-xl shadow-md relative border-r-4 border-gray-400 mb-8"
              >
                <div className="h-56  rounded-t-xl flex justify-center mb-4 items-center">
                  <img src={d.img} alt="" className="h-60 w-full" />
                </div>
                <p>{formatDate(d.date)}</p>

                <div className="flex  items-start gap-4 p-2 ">
                  <BsBuildings className="text-[#90cdf4]" /> <p>{d.title}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div className="flex  items-start gap-4 p-2 ">
                  <FaLocationDot className="text-[#90cdf4] w-5 h-5" />{' '}
                  <p>{d.location}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div className="flex  items-start gap-4 p-2 ">
                  <p>£{d.price}</p>
                  {/* Assuming d.icon is a React component */}
                </div>
                <div className="relative top-2 -left-20">
                  {' '}
                  <Link to="/details">
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
