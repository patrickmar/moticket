import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50   flex justify-between  border-b bg-white   items-start w-full mx-auto py-4 ">
      <div className="flex  gap-6 md:py-4 mx-4">
        <Link to="/">
          {' '}
          <div>
            <img
              src={logo}
              alt="logo"
              className="md:w-full w-[100px] md:ml-4"
            />
          </div>
        </Link>
        <Link to="/events">
          <button className="bg-secondary text-background md:px-5 px-2 md:text-[18px] text-[12px]  py-2 rounded-full md:ml-4">
            BROWSE ALL EVENTS{' '}
          </button>
        </Link>
      </div>

      <div
        id="navbar-sticky"
        className="md:static absolute bg-background md:min-h-fit min-h-[60vh] left-0 md:top-[-100%] md:block hidden md:w-auto w-full flex items-center px-5 py-4"
      >
        <ul className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ml-4 "></ul>
      </div>
      <div className=" flex  items-center md:block hidden gap-6 md:py-4 mx-4 ">
        <Link to="/create">
          <button className="bg-secondary text-background lg:text-[14px] md:text-[10px] px-5  py-2 rounded-full">
            Create event{' '}
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-primary text-background px-5  py-2 rounded-full md:ml-4">
            Sign In{' '}
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-secondary text-background  p-4  rounded-full md:ml-4">
            <BsCart4 />{' '}
          </button>
        </Link>
      </div>
      <div className="md:hidden   top-0   flex flex-1 justify-end w-full h-full  mx-4   items-center bg-background ">
        <img
          src={`${toggle && !showMobileNav ? close : menu} `}
          className={` w-[28px] h-[28px] object-contain`}
          onClick={() => {
            setToggle((prev) => !prev);
            setShowMobileNav(false);
          }}
          alt="menu"
        />
        <div
          className={`p-6  absolute bg-background w-full h-[1200px] top-10 -px-2 duration-500 py-24  ${
            toggle ? ' flex right-0 ' : 'right-[-100%]   '
          }  ${showMobileNav ? 'hidden' : ''} `}
        >
          <div
            className={`list-none px-3     flex-col justify-start items-start flex flex-1 -mt-12`}
          >
            <ul className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-4 ">
              <li>
                <Link to="/create" onClick={() => setShowMobileNav(true)}>
                  <button className="bg-secondary text-background lg:text-[14px] md:text-[10px] px-5  py-2 rounded-full">
                    Create event
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/login" onClick={() => setShowMobileNav(true)}>
                  <button className="bg-primary text-background px-5  py-2 rounded-full md:mr-4">
                    Sign In{' '}
                  </button>
                </Link>
              </li>

              <Link onClick={() => setShowMobileNav(true)} to="/cart">
                {' '}
                <button className="bg-secondary text-background  p-4  rounded-full md:ml-4">
                  <BsCart4 />{' '}
                </button>
              </Link>
            </ul>
          </div>
          <div className="absolute  justify-center items-center gap-6 mt-32 md:py-4 ml-3  "></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
