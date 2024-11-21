import React from "react";

function Services() {
  return (
    <section>
      <div className="w-full h-full flex items-center my-10 justify-center">
        <button className="p-8 text-white bg-primaryColor text-2xl rounded-sm font-bold hover:opacity-[75%]">
          &lt;
        </button>
        <div className="w-[1000px] h-[550px] bg-[#6F5E7C] rounded-2xl flex flex-row items-center justify-center overflow-x-hidden gap-10">
          <div className="w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl flex-nowrap flex-shrink-0">
            <div className="relative w-full h-[48%] bg-black">
              <img
                className="w-full h-full"
                src="nhc-hero.webp"
                alt="Service-1"
              />
              <div className="absolute w-full h-full inset-0 bg-primaryColor opacity-[30%]"></div>
            </div>
            <div className="w-full h-[70px] bg-primaryColor border border-secondaryColor rounded-[10px] flex justify-center items-center">
              <h6 className="text-white text-[24px] font-bold">
                Morning Assistance
              </h6>
            </div>
            <div>
              <p className="text-center text-white text-[18px] mx-10">
                Support with starting the day, including help with getting up,
                dressing, and preparing breakfast.
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl flex-nowrap flex-shrink-0 scale-105">
            <div className="relative w-full h-[48%] bg-black">
              <img
                className="w-full h-full"
                src="nhc-hero.webp"
                alt="Service-1"
              />
              <div className="absolute w-full h-full inset-0 bg-primaryColor opacity-[30%]"></div>
            </div>
            <div className="w-full h-[70px] bg-primaryColor border border-secondaryColor rounded-[10px] flex justify-center items-center">
              <h6 className="text-white text-[24px] font-bold">
                Morning Assistance
              </h6>
            </div>
            <div>
              <p className="text-center text-white text-[18px] mx-10">
                Support with starting the day, including help with getting up,
                dressing, and preparing breakfast.
              </p>
            </div>
          </div>
          <div className="w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl flex-nowrap flex-shrink-0">
            <div className="relative w-full h-[48%] bg-black">
              <img
                className="w-full h-full"
                src="nhc-hero.webp"
                alt="Service-1"
              />
              <div className="absolute w-full h-full inset-0 bg-primaryColor opacity-[30%]"></div>
            </div>
            <div className="w-full h-[70px] bg-primaryColor border border-secondaryColor rounded-[10px] flex justify-center items-center">
              <h6 className="text-white text-[24px] font-bold">
                Morning Assistance
              </h6>
            </div>
            <div>
              <p className="text-center text-white text-[18px] mx-10">
                Support with starting the day, including help with getting up,
                dressing, and preparing breakfast.
              </p>
            </div>
          </div>
        </div>
        <button className="p-8 text-white bg-primaryColor  text-2xl rounded-sm font-bold hover:opacity-[75%]">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Services;
