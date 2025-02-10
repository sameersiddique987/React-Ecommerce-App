import React from "react";

export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#f85606] hover:bg-[#e64a19] text-white font-bold text-lg py-2 px-9  transition-all duration-300 flex items-center gap-2"
    >
      
      <span>Buy Now</span>
    </button>
  );
}

