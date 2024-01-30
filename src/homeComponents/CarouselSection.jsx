import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselImg1 from "../images/carousel-img-1.jpg";
import carouselImg2 from "../images/carousel-img-2.jpg";
import carouselImg3 from "../images/carousel-img-3.jpg";
import carouselImg4 from "../images/carousel-img-4.jpg";
import carouselImg5 from "../images/carousel-img-5.jpg";
import carouselImg6 from "../images/carousel-img-6.jpg";

const CarouselSection = () => {
  const carouselImages = [
    {
      id: 0,
      img: carouselImg1,
      heading: "House Cleaning",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
    {
      id: 1,
      img: carouselImg2,
      heading: "Hotel Cleaning",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
    {
      id: 2,
      img: carouselImg3,
      heading: "Pest Control",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
    {
      id: 3,
      img: carouselImg4,
      heading: "Maintanance",
      text: "Best House Cleaning in the town",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
    {
      id: 4,
      img: carouselImg5,
      heading: "Full Cleaning",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
    {
      id: 5,
      img: carouselImg6,
      heading: "RVC Maintanance",
      text: "Professioanl House Cleaning is the best way to get your house looking at it's absolutely best",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="mt-5">
        <Carousel
          responsive={responsive}
          infinite={true}
          centerMode={true}
          autoPlay={true}
        >
          {carouselImages.map((item, index) => (
            <div key={item.id} className="relative">
              <div className="w-full h-96 px-3">
                <img
                  src={item.img}
                  className="w-full h-full object-cover rounded-lg brightness-[40%] hover:brightness-[70%]"
                  alt={`carousel-${item.id}`}
                />
              </div>
              <div className="sm:hidden block absolute bottom-10 left-8 bg-gray-200 rounded-md text-sm text-black p-2 font-semibold cursor-pointer">
                Read More
              </div>
              <div className="sm:block hidden bottom-[90px] text-white  absolute left-8 md:text-sm lg:text-base">
                {item.text}
              </div>
              <div className="sm:block hidden top-[50%] text-white font-semibold absolute left-8 md:text-2xl lg:text-3xl">
                {item.heading}
              </div>
              <div className="sm:block hidden absolute bottom-[40px] left-8 bg-gray-200 rounded-md text-sm lg:text-md text-black p-2 font-semibold cursor-pointer">
                Read More
              </div>
            </div>
          ))}
        </Carousel>
        ;
      </div>
    </>
  );
};

export default CarouselSection;
