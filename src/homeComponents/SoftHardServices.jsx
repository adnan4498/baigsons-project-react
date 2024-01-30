import React from "react";
import softServiceImg from "../images/soft-service-img.webp";
import hardServiceImg from "../images/hard-service-img.jpg";

const SoftHardServices = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex">
          <div className="w-1/2 relative">
            <img
              src={hardServiceImg}
              className="h-96 w-full object-cover brightness-50 hover:brightness-[40%] cursor-pointer"
              alt="Hard Service"
            />
            <button className="font-bold text-4xl lg:text-5xl text-white absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 brightness-100">
              Hard Services
            </button>
          </div>

          <div className="w-1/2 relative">
            <img
              src={softServiceImg}
              className="h-96 w-full object-cover brightness-50 hover:brightness-[40%] cursor-pointer"
              alt="Soft Service"
            />
            <button className="font-bold text-4xl lg:text-5xl text-white absolute z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 brightness-100">
              Soft Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftHardServices;
