import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
function Services() {
  return (
    <section>
      <Corousel />
    </section>
  );
}

function Corousel() {
  const servicesData = [
    {
      serviceName: "Morning Assistance",
      serviceDes:
        "Support with starting the day, including help with getting up, dressing, and preparing breakfast",
    },
    {
      serviceName: "Medication Management",
      serviceDes:
        "Timely reminders or administration of medications as prescribed.",
    },
    {
      serviceName: "Household Tasks",
      serviceDes:
        "Assistance with cleaning, laundry, and ironing to keep the home environment pleasant and organized.",
    },
    {
      serviceName: "Respite Care",
      serviceDes:
        " Temporary relief for primary caregivers, allowing them time to recharge while their loved one is supported.",
    },
    {
      serviceName: "Errands and Outings",
      serviceDes:
        " Help with grocery shopping, arranging outings, putting away items, and enjoying social activities such as coffee mornings or day trips.",
    },
    {
      serviceName: "Evening and Bedtime Support",
      serviceDes:
        "Assistance with evening routines, including getting ready for bed, preparing a bedtime drink, and helping clients settle in for a restful night.",
    },
    {
      serviceName: "Night Care Services",
      serviceDes:
        " Our night care services provide overnight assistance tailored to individual needs: Sleeping Night: Caregivers rest nearby, ready to assist as needed. Waking Night: Caregivers stay awake, offering continuous support throughout the night.",
    },
  ];
  return (
    <div className="w-full h-full flex items-center my-40 justify-center">
      <div className="container mx-auto p-10 bg-[#6F5E7C] rounded-2xl flex flex-row items-center justify-center overflow-x-hidden  gap-10 gap-y-20 border-black shadow-2xl shadow-primaryColor flex-wrap">
        {/* Left */}
        <div
          className={` relative w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 }`}
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
          className={`w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 scale-[1.07] `}
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
          className={`relative w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 `}
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
          className={` relative w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 }`}
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
          className={`w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 scale-[1.07] `}
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
          className={`relative w-[400px] h-[500px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 `}
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
