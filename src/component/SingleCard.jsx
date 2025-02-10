import React from 'react';
import Button from './Button/Button';
import AddtocardButton from './Button/Addtocard';

function SingleCard({ src, category, description, price, quantity, increaseQuantity, decreaseQuantity, payNow, addCard }) {
  return (
    <div className="m-5 sm:m-10 flex justify-center">
      <div className="p-6 sm:p-12 flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-md max-w-2xl hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 w-full">
        <img className="object-cover w-full md:w-56 h-56 rounded-t-lg md:rounded-l-lg md:rounded-t-none" src={src} alt="Product" />
        <div className="flex flex-col justify-between p-6 leading-normal w-full">
          <h5 className="mb-3 text-xl sm:text-3xl font-bold tracking-tight text-gray-900">{category}</h5>
          <p className="mb-4 text-sm sm:text-lg font-normal text-gray-700">{description}</p>
          <p className="mb-4 font-semibold text-gray-900 text-lg">Price: ${price}</p>
          <div className="flex items-center gap-3">
            <p className="text-lg">Quantity</p>
            <button onClick={decreaseQuantity} className="px-4 py-2 bg-[#fafafa] hover:bg-[#dadada] text-black rounded text-lg">-</button>
            <span className="text-2xl">{quantity}</span>
            <button onClick={increaseQuantity} className="px-4 py-2 bg-[#fafafa] hover:bg-[#dadada] text-black rounded text-lg">+</button>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-6">
            <Button onClick={payNow} />
            <AddtocardButton onClick={addCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;




