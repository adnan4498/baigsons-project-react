import React from "react";
import "../homeComponents/tt.css";
import starIcon from "../images/star-icon.png";
import staffIcon from "../images/staff-icon.png";
import smileyIcon from "../images/smiley-icon.png";
import "../homeComponents/tt.css";

const WhyUs = () => {
  return (
    <>
      <div className="mt-10">
        <div className="text-[#21252a] font-bold text-3xl sm:text-4xl w-full flex justify-center">
          <h2> Why Choose Baigsons</h2>
        </div>
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 justify-center mt-8 mx-10">
            <div className="bg-[#e1e8ed] flex flex-col items-center w-[100%] tt">
              <div className="w-14 mt-5">
                <img src={starIcon} />
              </div>
              <div className="text-[#21252a] font-bold text-3xl text-center mt-3 leading-[45px]">
                PERSONALIZED <br className="md:block hidden"></br> CLEANING{" "}
                <br></br> PROGRAM
              </div>
              <div className="text-[#21252a] text-center mt-3 w-[80%] font-semibold pb-5">
                Every house and every client have their own preferences. We
                listen to you and your needs. Combining that with our own
                experience we can put together and personalized cleaning program
                just for you home that you will be happy with.
              </div>
            </div>

            <div className="bg-[#e1e8ed] flex flex-col items-center w-[100%] tt">
              <div className="w-14 mt-5">
                <img src={staffIcon} />
              </div>
              <div className="text-[#21252a] font-bold text-3xl text-center mt-3 leading-[45px]">
                CAREFULLY <br className="md:block hidden"></br> SELECTED{" "}
                <br></br> STAFF
              </div>
              <div className="text-[#21252a] text-center mt-3 w-[80%] font-semibold pb-5">
                Every house and every client have their own preferences. We
                listen to you and your needs. Combining that with our own
                experience we can put together and personalized cleaning program
                just for you home that you will be happy with.
              </div>
            </div>

            <div className="bg-[#e1e8ed] flex flex-col items-center w-[100%] tt">
              <div className="w-14 mt-5">
                <img src={smileyIcon} />
              </div>
              <div className="text-[#21252a] font-bold text-3xl text-center mt-3 leading-[45px]">
                CLIENT <br className="md:block hidden"></br> SATISFICTION
                <br></br> GURANTEED
              </div>
              <div className="text-[#21252a] text-center mt-3 w-[80%] font-semibold pb-5">
                Every house and every client have their own preferences. We
                listen to you and your needs. Combining that with our own
                experience we can put together and personalized cleaning program
                just for you home that you will be happy with.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
