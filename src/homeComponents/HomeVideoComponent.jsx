import React from "react";
// import myVideo from "../src/videos/maintanance-video-compressed.mp4";
import myVideo from "../videos/maintanance-video-compressed.mp4";
import baigsonsLogo from "../images/baigsons-logo.png";

const HomeVideoComponent = () => {
  return (
    <>
      <div className="mt-4 relative">
        <div className="relative">
          <video
            autoPlay
            muted
            controls={false}
            loop
            className="w-full h-full object-cover"
          >
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
        <div>
          <div className="absolute top-0 right-0 bg-[#21252a] flex justify-center items-center w-[50%] h-full opacity-65 ">
            <div>
              <img src={baigsonsLogo} width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeVideoComponent;

// bg-[#21252a]
