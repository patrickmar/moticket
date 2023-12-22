import React from 'react';
import { logo1, p3 } from '../assets';
import { Link } from 'react-router-dom';
import { PiShareFatThin } from 'react-icons/pi';

const EventDetails = () => {
  return (
    <section>
      <div className="flex mt-56 justify-between ">
        <div className=" flex flex-col ml-32">
          <h1 className="text-4xl font-bold mb-4">Winter Wonderland</h1>
          <div className="flex items-center mb-4"></div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <path d="M16 2v2M8 2v2M3 10h18"></path>
            </svg>
            <p className="font-normal text-2xl">Saturday 21 JAN 2023</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <p className="font-normal text-2xl">7:30 PM (GMT)</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2s-8 5.75-8 12a8 8 0 0 0 16 0c0-6.25-8-12-8-12z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <p className="font-normal text-2xl">23 PARK ROAD, RICHMOND</p>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-primary"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 14.85 2 11.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 2.75-3.4 6.35-8.55 11.54L12 21.35z"></path>
            </svg>
            <p className="font-normal text-2xl mb-4">£5</p>
          </div>
          <h3 className="text-xl flex items-center font-bold mb-8">
            ORGANIZED BY
          </h3>
          <div className="flex items-center mb-4">
            <img
              src={logo1}
              alt="Organizer Logo"
              className="w-8 h-8 mr-2 rounded-full"
            />
            <p>BEST ENTERTAINMENT LIMITED</p>
          </div>
          <p className="flex items-center">
            Want to join more events like this?
          </p>
          <p className="mb-4 flex items-center">Join this community.</p>
          <Link>
            <button className="bg-white text-secondary rounded-xl border-2 border-secondary py-2 px-2 flex items-center">
              Become a Member
            </button>
          </Link>
        </div>

        <div className="w-1/3 mr-32">
          <div className="relative">
            <img
              src={p3}
              alt="Event Image"
              className="w-full h-auto border-2 border-gray-800 "
            />
            <div className="absolute  flex items-start mt-4 ">
              <div className="rounded-full text-primary border border-2xl  border-primary ">
                <PiShareFatThin />
              </div>

              <p className="ml-8">Share with friends</p>
            </div>
          </div>
        </div>
      </div>
      {/* About Event */}
      <div className="mt-32">
        <div className="flex flex-col text-justify mx-auto  w-[920px] border-gray-700 border border-4 p-8 mb-8 rounded-[50px]">
          <h1 className=" text-3xl font-semibold mb-4">ABOUT THE EVENT</h1>
          <p className="text-[24px] leading-[30.8px] text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            id condimentum nisi. Ut fringilla orci ante, id eleifend diam tempor
            sed. Fusce lobortis interdum ultrices. Pellentesque urna orci,
            mollis vitae libero vitae, efficitur bibendum tortor. In in
            imperdiet libero, vitae maximus mauris. Etiam vel convallis magna.
            Mauris neque urna, euismod a dolor at, ullamcorper bibendum tortor.
            Etiam fringilla, augue cursus pellentesque convallis, mi ex semper
            diam, at sollicitudin lorem nisl at velit. Nam sollicitudin mi eu
            pulvinar mattis.
          </p>
        </div>
      </div>
      {/* Select evnt types */}
      <div className="mt-32">
        <div className="flex flex-col text-justify mx-auto  w-[920px] border-gray-700 border border-4 p-8 mb-8 rounded-[50px] ">
          <h1 className=" text-3xl font-semibold mb-16">TICKETS</h1>

          <div className="w-[720px] flex justify-between text-justify mx-auto border-gray-700 border border-4 p-8 mb-8 rounded-[50px]">
            <div>
              <h1 className="font-normal text-[32px]">Standard</h1>
              <p className="text-gray-500 text-[18px]">
                These are the standard tickets
              </p>
            </div>
            <div>
              <p className="font-normal text-[32px]">£20.00</p>
              <p className="text-gray-500 text-[18px]">+ £1.00 fees</p>
              <div className="flex gap-4 mt-4">
                <div className="border border-primary rounded-full p-4">
                  <div className="text-primary flex justify-center items-center font-bold w-[24px] h-[24px]">
                    <button>-</button>
                  </div>
                </div>{' '}
                <div className="border border-gray-500 rounded-lg  flex justify-center items-center px-5 w-[24px] h-[44px] mt-2">
                  0
                </div>
                <div className="border border-primary rounded-full p-4">
                  <div className="text-primary flex justify-center items-center font-bold w-[24px] h-[24px]">
                    <button>+</button>
                  </div>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className="w-[720px] flex justify-between text-justify mx-auto border-gray-700 border border-4 p-8 mb-8 rounded-[50px]">
            <div>
              <h1 className="font-normal text-[32px]">Regular</h1>
              <p className="text-gray-500 text-[18px]">
                These are the standard tickets
              </p>
            </div>
            <div>
              <p className="font-normal text-[32px]">£20.00</p>
              <p className="text-gray-500 text-[18px]">+ £1.00 fees</p>
              <div className="flex gap-4 mt-4">
                <div className="border border-primary  rounded-full p-4">
                  <div className="text-primary flex justify-center items-center font-bold w-[24px] h-[24px]">
                    <button>-</button>
                  </div>
                </div>{' '}
                <div className="border border-gray-500 rounded-lg  flex justify-center items-center px-5 w-[24px] h-[44px] mt-2">
                  0
                </div>
                <div className="border border-primary rounded-full p-4 cursor-pointer">
                  <div className="text-primary flex justify-center items-center font-bold w-[24px] h-[24px]">
                    <button>+</button>
                  </div>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-24 ">
            <button className="text-white bg-secondary py-2 px-6 rounded-[50px] w-[30%] ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
