// import React from 'react'

// function SingleCard(props) {
//   return (
    
//     <div>
//     <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={props.src} alt="error" />
//         <div class="flex flex-col justify-between p-4 leading-normal">
//             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.category}</h5>
//             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
//         </div>
//     </a>
//     </div>
//   )
// }

// export default SingleCard

import React from 'react';

function SingleCard(props) {
  return (
    <div className=" m-20 flex justify-center">
      <a
        href="#"
        className=" p-9 flex items-center bg-white border border-gray-200 rounded-lg shadow-md max-w-xl hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
        style={{ width: '100%', maxWidth: '600px' }} // Set max width for a wide card
      >
        <img
          className="object-cover w-48 h-48 rounded-l-lg" // Set image size to be on the left side
          src={props.src}
          alt="Product"
        />
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {props.category}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{props.description}</p>
        </div>
      </a>
    </div>
  );
}

export default SingleCard;









