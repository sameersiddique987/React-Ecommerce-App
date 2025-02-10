import React from "react";

export default function AddtocardButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#2abbe8] hover:bg-[#1a9cb7]  text-white font-bold text-lg py-2 px-6 transition-all duration-300 shadow-md active:scale-95"
    >
      Add to Cart
    </button>
  );
}
