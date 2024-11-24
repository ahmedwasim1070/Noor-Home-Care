import React from "react";

function header() {
  return (
    <header>
      <div className="2xl:header-container-2xl xl:header-container-xl ">
        <div className="2xl:header-navleft-2xl xl:header-navleft-xl">
          <div className="flex flex-row gap-3 ">
            <h1 className=" 2xl:text-[36px] xl:text-[32px] font-extrabold text-primaryColor ">
              Noor
            </h1>
            <h1 className="text-[36px] font-bold text-primaryColor">
              Home Care
            </h1>
          </div>
          <div className="mx-5">
            <img src="logo-main.svg" alt="Logo" />
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center px-20 justify-end">
          <button className="flex flex-row items-center gap-4 border-[2px] border-primaryColor px-4 py-1 rounded-2xl transition-all duration-100 hover:bg-primaryColor hover:text-white group  ">
            <span>
              <svg
                width="28"
                height="28"
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
            <p className="text-[32px] font-bold">Call Us</p>
          </button>
        </div>
      </div>
      <nav className="w-full h-[45px] bg-primaryColor flex items-center justify-center">
        <ul className="w-[40%] h-full flex items-center justify-evenly flex-row text-white text-[20px] ">
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <a href="#">Services</a>
          </li>
          <li className="transition-all duration-75 p-2 hover:bg-white hover:text-primaryColor cursor-pointer">
            <a href="#">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default header;
