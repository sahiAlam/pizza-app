import React from "react";
import pizza from "../assets/pizza.png";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 space-y-12 md:space-y-0">
          <div>
            <h6 className="font-bold text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="font-bold text-6xl">Don't Wait !</h1>
            <button className="bg-yellow-400 px-6 py-3 rounded-full mt-5 font-bold hover:bg-yellow-500 transition-all">
              Order Now
            </button>
          </div>
          <div>
            <img src={pizza} alt="pizza banner" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;