import React, { useState } from "react";
function Services() {
  return (
    <section>
      <Corousel />
    </section>
  );
}

function Corousel() {
  return (
    <div className="w-full h-full flex items-center 2xl:my-40 xl:my-40 lg:my-40 md:my-40 sm:my-20 esm:my-16 justify-center">
      <div className="2xl:container xl:container lg:container md:container sm:container-none esm:container-none 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-auto sm:mx-10 esm:mx-2 p-10 bg-[#6F5E7C] rounded-2xl flex flex-row items-center justify-center overflow-x-hidden  gap-10 gap-y-20 border-black shadow-2xl shadow-primaryColor flex-wrap">
        {/* Left */}
        <div
          className={` relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 }`}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="2xl:w-[80%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[90%] esm:w-[90%]  h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Morning Assistance
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Support with starting the day, including help with getting up,
              dressing, and preparing breakfast
            </p>
          </div>
          <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
        </div>
        {/* Mid */}
        <div
          className={`2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%]  h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 scale-[1.07] `}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Medication Management
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Timely reminders or administration of medications as prescribed.
            </p>
          </div>
        </div>
        {/* Right */}
        <div
          className={`relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%]  h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 `}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="w-[80%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Household Tasks
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Assistance with cleaning, laundry, and ironing to keep the home
              environment pleasant and organized.
            </p>
          </div>
          <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
        </div>
        {/* Left */}
        <div
          className={` relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%]  h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 }`}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="w-[80%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">Respite Care</h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Temporary relief for primary caregivers, allowing them time to
              recharge while their loved one is supported.
            </p>
          </div>
          <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
        </div>
        {/* Mid */}
        <div
          className={`2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 scale-[1.07] `}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="w-[80%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Errands and Outings
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Help with grocery shopping, arranging outings, putting away items,
              and enjoying social activities such as coffee mornings or day
              trips.
            </p>
          </div>
        </div>
        {/* Right */}
        <div
          className={`relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 `}
        >
          <div className="relative w-full h-[48%] bg-black">
            <img
              className="w-full h-full"
              src="nhc-hero.webp"
              alt="Service-1"
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-transparent to-primaryColor"></div>
          </div>
          <div className="w-[80%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Evening/Bedtime Support
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Assistance with evening routines, including getting ready for bed,
              preparing a bedtime drink, and helping clients settle in for a
              restful night.
            </p>
          </div>
          <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
        </div>
        <div className="bg-primaryColor rounded-[10px] shadow-primaryColor shadow-2xl flex flex-col p-10 gap-y-10">
          <div className="w-[40%] h-[70px]  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
            <h6 className="text-white text-[24px] font-bold">
              Night Care Services
            </h6>
          </div>
          <div>
            <p className="text-center text-white text-[18px] mx-10">
              Our night care services provide overnight assistance tailored to
              individual needs: Sleeping Night: Caregivers rest nearby, ready to
              assist as needed. Waking Night: Caregivers stay awake, offering
              continuous support throughout the night.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
