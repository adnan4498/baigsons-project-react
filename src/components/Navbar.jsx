import React from "react";
import baigsonsLogo from "../images/baigsons-logo.png";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

import "../components/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="bg-[#21252a] md:h-16 h-20 sm:h-28">

        {/****  Desktop - Tablet  ****/}

        <div className="md:flex hidden items-center gap-8 justify-center">
          <div className="bg-red-500 h-16 flex items-center py-4 px-5 text-white">Home</div>
          <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
            Abous us
          </div>
          <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
            Services
          </div>
          <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
            Residental
          </div>
          <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
            Commercial
          </div>
          <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
            Contact
          </div>
        </div>

        {/****  Mobile  ****/}

        <div className="md:hidden flex items-center justify-between ml-2 sm:ml-4">
          <div className="">
            <img src={baigsonsLogo} className="w-36 sm:w-44" />
          </div>

          <div className="md:hidden block">
            <div className="w-20">
              <div class="menu cross menu--1">
                <label
                  className="w-20 sm:w-24 absolute top-[5px] sm:top-[10px] sm:mr-4"
                  style={{ zIndex: "99999" }}
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      toggleDrawer();
                      // gsapToggle();
                    }}
                  />
                  <svg
                    viewBox="0 0 100 100"
                    className="bg-transparent"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="0" cy="0" r="0" />
                    <path class="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
                    <path class="line--2" d="M0 50h70" />
                    <path class="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
                  </svg>
                </label>
              </div>
            </div>
          </div>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className=""
          >
            <div className="md:hidden items-center gap-12 justify-center bg-[#21252a]">
              <div className="bg-red-500  flex items-center py-4 px-5">
                Home
              </div>
              <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
                Abous us
              </div>
              <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
                Services
              </div>
              <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
                Residental
              </div>
              <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
                Commercial
              </div>
              <div className="flex items-center py-4 px-5 text-[#808389] hover:bg-red-500 hover:text-white">
                Contact
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="bg-[#21252a]">
//       <div className="flex items-center gap-12 justify-center">
//         {['Home', 'About us', 'Services', 'Residential', 'Commercial', 'Contact'].map((item, index) => (
//           <div key={index} className="flex items-center py-4 px-5">{item}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
