import { logo } from '../assets';
// import styles from '../style';
// import mail from '../images/mail.png';
// import egainfooter from '../images/egainfooter.jpg';
// import phone from '../images/phone.png';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = ({ link }) => {
  return (
    <div className={`bg-dark  md:px-16 px-6 flex justify-center items-start`}>
      <div className=" xl:max-w-[1280px] w-full">
        <div
          className={`flex justify-center items-center md:py-16 py-6 flex-col`}
        >
          <div
            className={`flex justify-center items-start lg:flex-row flex-col mb-10 w-full`}
          >
            <div className="flex-[3.0] flex flex-col justify-start mt-24 mr-[100px] w-full ">
              <img
                src={logo}
                alt="logo"
                className="lg:w-full md:w-[600px] w-full"
              />
            </div>
            <div className="flex-[2.0] mr-8 w-full flex flex-row justify-between flex-wrap  ">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px] mt-20">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {' '}
                  Services{' '}
                </h4>
                <div className="list-none mb-4 block ">
                  <Link
                    to="/services/consulting"
                    className={`font-inter font-normal text-[16px] leading-[24px] mt-2 text-background hover:text-primary cursor-pointer block mb-4`}
                  >
                    Business Consulting{' '}
                  </Link>

                  <Link
                    to="/services/software"
                    className={`font-inter font-normal text-[16px] leading-[24px] mt-4 text-background hover:text-primary cursor-pointer block mb-4`}
                  >
                    Software Development{' '}
                  </Link>
                  <Link
                    to="/services/sas"
                    className={`font-inter block font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4`}
                  >
                    SAS CX and Analytics{' '}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-16 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {' '}
                  About Us{' '}
                </h4>
                <ul className="list-none mb-4 block">
                  <Link
                    to="/about"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Corporate Philosophy{' '}
                  </Link>
                  <Link
                    to="/about"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Corporate Profile{' '}
                  </Link>
                  <Link
                    to="/about"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer block mb-4`}
                  >
                    Our Partners{' '}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.0] w-full flex flex-row justify-between flex-wrap md:mt-12 mt-10">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[27px] text-white mb-4">
                  {' '}
                  Clients{' '}
                </h4>
                <ul className="list-none mb-4">
                  <Link
                    to="/clients/agencies"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Government Agencies{' '}
                  </Link>
                  <Link
                    to="/clients/financial"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Financial Sector{' '}
                  </Link>
                  <Link
                    to="/clients/telecoms"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer mb-4 block`}
                  >
                    Telecoms Sector{' '}
                  </Link>
                </ul>
              </div>
            </div>
            <div className="flex-[2.3] w-full flex flex-row justify-between flex-wrap md:mt-12 mt-10 ">
              <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-inter font-medium text-[18px] leading-[24px] text-white mb-4">
                  {' '}
                  Address{' '}
                </h4>
                <ul className="list-none mb-4">
                  <li
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background hover:text-primary  cursor-pointer `}
                  >
                    66 Bode Thomas, Surulere, Lagos.{' '}
                  </li>
                  <div className="flex mt-4">
                    <ul className="flex">
                      {/* <div className="flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white  mr-6 hover:bg-blue">
                        <Link
                          target="_blank"
                          to="https://web.facebook.com/AvanteConsultingSolutions?_rdc=1&_rdr"
                        >
                          <FiFacebook className="w-[11.99px] h-[12px] mt-3.5 ml-3.5 -p-1 text-white  " />
                        </Link>
                      </div> */}

                      {/* <div className=" flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white hover:bg-blue  mr-7">
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/company/avante-consulting-solutions-ltd/mycompany/"
                        >
                          <FaLinkedinIn className="w-[11.99px] h-[12px]  mt-3.5 ml-3.5 -p-1 text-white " />
                        </Link>
                      </div> */}
                      {/* <div className="flex  h-[40px] w-[39.97px]  rounded-full ring-2 ring-white  mr-7 hover:bg-blue">
                        <Link
                          to="https://www.instagram.com/avanteconsultingsolutions"
                          target="_blank"
                        >
                          <FaInstagram className="w-[11.99px] h-[12px]  mt-3.5 ml-3.5 -p-1 text-white " />
                        </Link>
                      </div> */}
                    </ul>
                  </div>
                  <Link
                    to="https://www.sas.com/en_us/solutions/customer-intelligence.html"
                    target="_blank"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background mt-[20px] hover:text-primary  cursor-pointer block`}
                  ></Link>

                  <Link
                    to="https://www.egain.com/"
                    target="_blank"
                    className={`font-inter font-normal text-[16px] leading-[24px] text-background mt-[20px] hover:text-primary  cursor-pointer block`}
                  ></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
