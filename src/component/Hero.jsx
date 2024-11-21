import React from "react";

function Hero() {
  return (
    <main>
      <section className="flex flex-row">
        <div className="w-[35.50%] h-[600px] bg-primaryColor opacity-[95%] p-20">
          <div className="text-white">
            <div className="w-[250px] h-[80px] bg-secondaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  text-[36px] cursor-pointer  font-bold transition-all duration-500 hover:translate-x-[50px] ">
              <h2>Home Care</h2>
            </div>
          </div>
          <div className="text-white flex justify-center">
            <div className="w-[350px] h-[70px] bg-secondaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  text-[24px]  font-bold cursor-pointer transition-all duration-500 hover:translate-x-[-50px]">
              <h2>For Your Loved One’s</h2>
            </div>
          </div>
          <div className="text-white flex mt-20">
            <p className="text-[24px]">Kingston upon Hull , United Kingdom</p>
          </div>
        </div>
        <div className="w-[65.50%] h-[600px] relative">
          <img
            className="w-full h-[600px]"
            src="nhc-hero.webp"
            alt="Main Landing Image"
          />
          <div className=" absolute inset-0 w-full h-full bg-primaryColor opacity-[30%]"></div>
        </div>
      </section>
      <section className="w-full h-[150px] bg-primaryColor flex items-center justify-center ">
        <div className="w-[70%] flex flex-row items-center justify-evenly">
          <button className="flex flex-row items-center justify-center group gap-2 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor">
            <span>
              <svg
                width="23"
                height="23"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" group-hover:fill-primaryColor"
                  d="M10.5658 2.3033L11.7015 4.33844C12.7265 6.17503 12.3151 8.58433 10.7007 10.1987C10.7007 10.1987 8.74279 12.1569 12.2929 15.7072C15.8419 19.2562 17.8013 17.2993 17.8013 17.2993C19.4157 15.6849 21.8249 15.2735 23.6616 16.2985L25.6966 17.4342C28.47 18.9819 28.7975 22.8712 26.3599 25.3089C24.8951 26.7737 23.1007 27.9134 21.1171 27.9885C17.7779 28.1152 12.107 27.2701 6.41847 21.5816C0.72998 15.893 -0.115129 10.2222 0.0114661 6.88292C0.0866636 4.89931 1.2264 3.10491 2.69117 1.64016C5.12883 -0.797512 9.01805 -0.469981 10.5658 2.3033Z"
                  fill="#f4f4f4"
                />
              </svg>
            </span>
            <p className="text-[24px] text-secondaryColor group-hover:text-primaryColor">
              +
            </p>
            <h1 className="text-[24px]">07880-283423</h1>
          </button>
          <button className="flex flex-row items-center justify-center group gap-4 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor">
            <span>
              <svg
                className=" group-hover:fill-primaryColor group-hover:stroke-primaryColor"
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.55556 21.4286L10.3333 12M27.4444 21.4286L19.6667 12M1 5.71429L12.2389 13.2832C13.2368 13.9553 13.7356 14.2915 14.275 14.4219C14.7516 14.5374 15.2484 14.5374 15.725 14.4219C16.2644 14.2915 16.7632 13.9553 17.7611 13.2832L29 5.71429M5.97778 23H24.0222C25.7646 23 26.6359 23 27.3013 22.6574C27.8867 22.3562 28.3627 21.8753 28.6609 21.284C29 20.6117 29 19.7316 29 17.9714V6.02857C29 4.26841 29 3.38832 28.6609 2.71603C28.3627 2.12466 27.8867 1.64386 27.3013 1.34256C26.6359 1 25.7646 1 24.0222 1H5.97778C4.2354 1 3.3642 1 2.6987 1.34256C2.1133 1.64386 1.63736 2.12466 1.3391 2.71603C1 3.38832 1 4.2684 1 6.02857V17.9714C1 19.7316 1 20.6117 1.3391 21.284C1.63736 21.8753 2.1133 22.3562 2.6987 22.6574C3.3642 23 4.23538 23 5.97778 23Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h1 className="text-[24px]">Email Us</h1>
          </button>
          <button className="flex flex-row items-center justify-center group gap-4 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor">
            <span>
              <svg
                width="27"
                height="35"
                viewBox="0 0 27 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 33.1429C19.75 26.7143 26 20.9579 26 13.8571C26 6.75634 20.4036 1 13.5 1C6.59645 1 1 6.75634 1 13.8571C1 20.9579 7.25 26.7143 13.5 33.1429Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 18.8571C16.4587 18.8571 18.8571 16.4587 18.8571 13.5C18.8571 10.5413 16.4587 8.14282 13.5 8.14282C10.5412 8.14282 8.14282 10.5413 8.14282 13.5C8.14282 16.4587 10.5412 18.8571 13.5 18.8571Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h1 className="text-[24px]">Find Us</h1>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Hero;
