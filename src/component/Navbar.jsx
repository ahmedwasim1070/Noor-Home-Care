import React from "react";

function Navbar() {
  return (
    <>
      <div className="my-2 h-[30px]  flex justify-center">
        <nav className="h-full w-[45%] flex items-center justify-evenly text-textColor font-bold">
          <a
            className=" relative hover:text-primaryColor transition-all duration-75 underline-animation "
            href="#"
          >
            Home
          </a>
          <a
            className=" relative hover:text-primaryColor transition-all duration-75 underline-animation "
            href="#"
          >
            About Us
          </a>
          <a
            className=" relative hover:text-primaryColor transition-all duration-75 underline-animation "
            href="#"
          >
            Services
          </a>
          <a
            className=" relative hover:text-primaryColor transition-all duration-75 underline-animation "
            href="#"
          >
            Join Us
          </a>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
