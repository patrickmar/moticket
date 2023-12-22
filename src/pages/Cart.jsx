import React from 'react';
import { card5 } from '../assets';

const Cart = () => {
  return (
    <section className="mt-32 ">
      <h1 className="flex justify-start px-12  text-[56px] text-gray-700 font-semibold">
        MY CART
      </h1>
      <div className="flex justify-between  items-center px-12 -mt-72 relative">
        {/* First div */}
        <div className="border border-gray-500 border-4 w-2/3 p-4 rounded-[50px]">
          <div className="flex justify-between items-center mx-auto">
            <div>
              {' '}
              <img src={card5} alt="cart" className="w-32 h-32" />
            </div>{' '}
            <div className="flex flex-col text-justify mr-24">
              <h1 className="font-normal text-[44px] text-gray-700">
                Winter Wonderland
              </h1>
              <p className="text-[24px] text-gray-500 mb-8">Standard</p>
              <button className="text-primary underline text-[14px] flex flex-start">
                Remove
              </button>
            </div>
            <div className="flex flex-col">
              <p className="text-[24px] font-normal text-gray-700">£20.00</p>
              <p className="text-[18px] font-semibold text-gray-500">
                + £1.00 fees
              </p>
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
        </div>
        {/* Second div */}
        <div className="flex flex-col w-1/3 p-4 mt-72 relative">
          <div className="border border-gray-500 border-4 rounded-[50px] py-4 mb-4 ">
            <div className="flex justify-start p-4">
              <p className="py-2 px-4 border border-gray-700 border-4 rounded-[50px] font-bold text-[12px]">
                PROMO CODE?
              </p>
            </div>
            <div className="flex justify-between px-4 py-2">
              <input
                type="text"
                className="py-2 px-4 border border-gray-700 border-4 rounded-[50px]"
                placeholder="Enter Code"
              />
              <button className="bg-secondary py-2 px-6 text-[16px] text-white rounded-[50px]">
                APPLY
              </button>
            </div>
          </div>
          <div className="border border-4 border-gray-500 rounded-[50px] ">
            <div className="flex justify-start p-4 ">
              <p className="py-2 px-4 border border-gray-700 border-4 rounded-[50px] font-bold text-[12px]">
                ORDER SUMMARY
              </p>
            </div>
            <div className="flex justify-between px-4 py-2 mb-6">
              <p>Subtotal (2 tickets)</p>
              <p>£40.00</p>
            </div>
            <div className="flex justify-between px-4 py-2 mb-6">
              <p>Subtotal (2 tickets)</p>
              <p>£40.00</p>
            </div>
            <div className="flex justify-between px-4 py-2 mb-6">
              <p>Subtotal (2 tickets)</p>
              <p>£40.00</p>
            </div>
            <div className="flex justify-center  mb-6 ">
              <hr className="  text-gray-900 mb-4 font-bold px-2 w-full mx-4" />
            </div>
            <div className="flex justify-between px-4 py-2 mb-6">
              <p>Total</p>
              <p>£40.00</p>
            </div>
            <div className="flex justify-center  mb-6">
              <button className="bg-secondary text-white py-2 w-full mx-4 rounded-[50px]">
                PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
