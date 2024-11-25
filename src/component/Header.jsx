import React, { useState } from "react";
import { Link } from "react-router-dom";

function header() {
  const [shNavbar, setShNavbar] = useState(false);
  return (
    <header className="sticky top-0 z-[9997] bg-white">
      {shNavbar && (
        <div
          onClick={() => setShNavbar(false)}
          className="fixed inset-0 w-full h-[100%] bg-black opacity-60 z-[9998]"
        ></div>
      )}
      <div className="2xl:header-container-2xl xl:header-container-xl lg:header-container-lg md:header-container-md sm:header-container-sm esm:header-container-esm relative ">
        <div className="2xl:header-navleft-2xl xl:header-navleft-xl lg:header-navleft-lg md:header-navleft-md sm:header-navleft-sm esm:header-navleft-esm">
          <div className="flex flex-row gap-3 text-nowrap  ">
            <h1 className=" 2xl:text-[36px] xl:text-[32px] lg:text-[30px] md:text-[30px] sm:text-[28px] esm:text-[24px] font-extrabold text-primaryColor ">
              Noor
            </h1>
            <h1 className="2xl:text-[36px] xl:text-[36px] lg:text-[30px] md:text-[30px] sm:text-[28px] esm:text-[24px] font-bold text-primaryColor">
              Home Care
            </h1>
          </div>
          <div className="2xl:mx-5 xl:mx-5 lg:mx-5 md:mx-4 sm:mx-4 esm:mx-2">
            <img
              className="2xl:w-[95px] 2xl:h-[95px] xl:[92px] xl:[92px] lg:w-[88px] lg:h-[88px] md:w-[86px] md:h-[86px] sm:w-[82px] sm:h-[82px] esm:w-[80px] esm:h-[80px]"
              src="logo-main.svg"
              alt="Logo"
            />
          </div>
        </div>
        <div className="w-[40%] h-full 2xl:flex xl:flex lg:flex md:flex sm:flex esm:hidden items-center 2xl:px-20 xl:px-16 lg:px-16 md:px-2 sm:px-0 esm:px-0 justify-end">
          <a
            href="tel:+07880283423"
            className="flex flex-row items-center gap-4 border-[2px] border-primaryColor px-4 py-1 text-nowrap  rounded-2xl transition-all duration-100 hover:bg-primaryColor hover:text-white group "
          >
            <span className="2xl:block xl:block lg:block md:block sm:block esm:hidden">
              <svg
                className="2xl:w-[28px] 2xl:h-[28px] xl:w-[26px] xl:h-[26px] lg:w-[25px] lg:h-[25px] md:w-[24px] md:h-[24px] sm:w-[22px] sm:h-[22px]"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" group-hover:fill-white"
                  d="M10.5658 2.3033L11.7015 4.33844C12.7265 6.17503 12.3151 8.58433 10.7007 10.1987C10.7007 10.1987 8.74279 12.1569 12.2929 15.7072C15.8419 19.2562 17.8013 17.2993 17.8013 17.2993C19.4157 15.6849 21.8249 15.2735 23.6616 16.2985L25.6966 17.4342C28.47 18.9819 28.7975 22.8712 26.3599 25.3089C24.8951 26.7737 23.1007 27.9134 21.1171 27.9885C17.7779 28.1152 12.107 27.2701 6.41847 21.5816C0.72998 15.893 -0.115129 10.2222 0.0114661 6.88292C0.0866636 4.89931 1.2264 3.10491 2.69117 1.64016C5.12883 -0.797512 9.01805 -0.469981 10.5658 2.3033Z"
                  fill="#432E54"
                />
              </svg>
            </span>
            <p className="2xl:text-[32px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[24px] esm:text-[22px] font-bold">
              Call Us
            </p>
          </a>
        </div>
        <div className="h-full flex mx-2 items-center 2xl:hiden xl:hidden lg:hidden md:flex sm:flex esm:flex">
          <button
            onClick={() => setShNavbar(true)}
            className="p-2 rounded-full"
          >
            <svg
              className="stroke-primaryColor w-[40px] h-[40px] transition-all duration-300 hover:stroke-secondaryColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <nav className="w-full h-[45px] bg-primaryColor  items-center justify-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden esm:hidden">
        <ul className="2xl:w-[40%] xl:w-[42%] lg:w-[45%] h-full flex items-center justify-evenly flex-row text-white text-[20px] ">
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <Link to="/services" href="#">
              Services
            </Link>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <Link to="/join-us" href="#">
              Join Us
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`fixed  bg-primaryColor  w-[65%] h-full top-0 transition-all duration-150 ${
          shNavbar ? "right-0" : "right-[-65%]"
        } 2xl:hidden xl:hidden lg:hidden md:block sm:block esm:block z-[9999] p-2`}
      >
        <div className="w-full flex justify-end px-3 py-4  ">
          <button
            onClick={() => setShNavbar(false)}
            className="p-2 bg-secondaryColor border border-secondaryColor hover:border-white  rounded-full group hover:bg-transparent transition-all duration-300"
          >
            <svg
              className="w-[32px] h-[32px] fill-primaryColor group-hover:fill-white"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className=" h-[50%]  flex justify-center text-white ">
          <ul className="flex flex-col items-center justify-center gap-y-8 text-xl font-bold">
            <li>
              <Link
                to="/"
                className=" transition-all duration-300 hover:text-secondaryColor "
                href=""
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className=" transition-all duration-300 hover:text-secondaryColor "
                href=""
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className=" transition-all duration-300 hover:text-secondaryColor "
                href=""
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/join-us"
                className=" transition-all duration-300 hover:text-secondaryColor "
                href=""
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-4  left-0 right-0">
          <ul className="flex flex-row justify-evenly underline text-white align-bottom">
            <li>
              <a className=" hover:text-secondaryColor " href="">
                Contact-Us
              </a>
            </li>
            <li>
              <a className=" hover:text-secondaryColor " href="">
                Feeback
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default header;
