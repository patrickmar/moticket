// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaHome } from 'react-icons/fa';
// import { FaPaypal } from 'react-icons/fa';
// import { FaLocationDot } from 'react-icons/fa6';

// const ProductSlider = ({ products }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   };

//   return (
//     <Slider {...settings}>
//       {products.map((product, index) => (
//         <div key={index} className="mx-4">
//           <div className="mx-auto w-64 transform overflow-hidden mb-8 rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
//             <img
//               className="h-40 w-full object-cover object-center"
//               src={product.image}
//               alt={product.heading}
//             />
//             <div className="p-4">
//               <h2 className="flex gap-2 mb-2 text-lg font-medium text-gray-900">
//                 <FaHome /> {product.heading}
//               </h2>
//               <p className="flex gap-2 mb-2 text-base text-gray-700">
//                 <FaLocationDot /> {product.location}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ProductSlider;
