import React from "react";
import cleaningImg from "../images/cleaning-image.png";
import Rive from "@rive-app/react-canvas";
import cleaningAnimation from "../animations/cleaning-rive-animation.riv";

const ProfessionalServices = () => {
  return (
    <>
      <div className="bg-[#21252a] lg:h-96">
        <div className="mx-auto w-[80%] md:w-full md:flex block justify-around md:px-10 gap-4 items-center">
          <div className="md:w-6/12">
            <Rive
              src={cleaningAnimation}
              // stateMachines="bumpy"
              autoplay={true} // Or play={true}
              play={true}
              // style={{ width: 350, height: 350 }}
            />
          </div>
          <div className="text-white mt-5 md:w-6/12">
            <h2 className="text-3xl font-semibold">
              Professional Cleaning <br className=""></br> Services
            </h2>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              facere cumque voluptates possimus sapiente iste veniam temporibus,
              nam laboriosam laborum excepturi, id iure aliquam aspernatur odio
              praesentium mollitia sequi eveniet quos dolores eos hic! Esse
              voluptate nesciunt accusamus blanditiis hic aut, consectetur
              veniam earum aperiam, soluta nulla. Error, commodi vero!
            </p>

            <div className="flex gap-4 mt-5 pb-10">
              <button className=" text-[#21252a] bg-white rounded-full py-3 px-3 font-bold ">
                COMMERCIAL
              </button>
              <button className=" text-[#21252a] bg-white rounded-full py-3 px-3 font-bold ">RESIDENTIAL</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalServices;
