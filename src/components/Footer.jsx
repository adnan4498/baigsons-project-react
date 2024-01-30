import React from "react";
import fbIcon from "../images/facebook-icon.png";
import instaIcon from "../images/instagram-icon-2.jpg";
import twitterIcon from "../images/twitter-icon-2.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#21252a] mt-5 pl-5 lg:flex items-center">
      <div className="w-4/12 lg:min-h-[420px]">
          <h2 className="text-5xl text-red-500 font-bold pt-4">BAIGSONS</h2>
          <p className="pt-2 text-sm w-72 sm:w-[60%] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            ipsum aperiam explicabo quibusdam tempore velit odit ad deleniti
            ullam ratione iure itaque cum, laboriosam cumque quia. Aliquid eius
            quam voluptates alias cupiditate quaerat, nam fuga officiis aliquam
            iste maiores voluptatum! Aut vel praesentium quo qui blanditiis
            obcaecati illum est laboriosam?
          </p>
          <div className="social-icons flex items-center gap-2 mt-3">
            <div className="w-10">
              <img src={fbIcon} />
            </div>
            <div className="w-10">
              <img src={instaIcon} />
            </div>
            <div className="w-10">
              <img src={twitterIcon} />
            </div>
          </div>
        </div>

        <div className="w-4/12 lg:min-h-[420px]">
          <div className="text-3xl font-semibold mt-5">Quick Links</div>
          <ul className="list-disc ml-3 mt-2">
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Residential</li>
            <li className="mb-2">Commercial</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>

        <div className="w-4/12 lg:min-h-[420px]">
          <div className="text-3xl font-semibold mt-5">Our Services</div>
          <ul className="list-disc ml-3 mt-2">
            <li className="mb-2">Deep Cleaning Service</li>
            <li className="mb-2">Water Tank Cleaning</li>
            <li className="mb-2">Post Construction Cleaning</li>
            <li className="mb-2">Window/Glass Cleaning</li>
            <li className="mb-2">Pest Control</li>
            <li className="mb-2">Kitchen Deep Cleaning</li>
            <li className="mb-2">Water Tank Cleaning</li>
            <li className="mb-2">Post Construction Cleaning</li>
            <li className="mb-2">Window/Glass Cleaning</li>
          </ul>
        </div>

        <div className="w-4/12 lg:min-h-[420px]">
          <div className="text-3xl font-semibold mt-5">Contact</div>
          <p className="mt-2">
            Emerald Cleaning Services<br></br> AL Hashemi Group <br></br> IBN
            Seena Street, Muntazah <br></br> Building No 26 <br></br> PO Box
            Qatar{" "}
          </p>
          <div className="mt-3">

          <p className="mt-1">+974 2845 2912</p>
          <p className="mt-1">+974 7845 5916</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
