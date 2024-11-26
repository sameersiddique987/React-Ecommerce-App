

import React from 'react';


function SingleCard(props) {
  return (
    <div className="  m-20 flex justify-center">
      <a
        href="#"
        className=" p-5 flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 duration-300 w-full max-w-xl"
      >
        {/* Image */}
        <img
          className="object-cover w-full md:w-48 h-48 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          src={props.src}
          alt="Product"
        />
        
        {/* Text Content */}
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {props.category}
          </h5>
          <p className="mb-3 font-normal text-gray-700 text-sm md:text-base">
            {props.description}
          </p>
        </div>
      </a>
    </div>
  );
}

export default SingleCard;










