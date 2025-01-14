import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section>
      <div className=" bg-primaryColor">
        <div className="2xl:container xl:container lg:container md:container sm:container-none esm:contain-none mx-auto 2xl:px-20 xl:px-20 lg:px-10 md:px-8 sm:px-4 esm:px-2 flex flex-row flex-wrap 2xl:justify-center xl:justify-center lg:justify-center md:justify-center">
          <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[50%] p-10">
            <ul className="text-white underline flex flex-col gap-5">
              <li>
                <a className=" hover:text-secondaryColor " href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className=" hover:text-secondaryColor " href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className=" hover:text-secondaryColor " href="#">
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[50%] sm:w-full esm:w-full flex flex-col item-center gap-y-3 my-10">
            <p className=" text-white text-[14px] text-center">
              Become a part of our Team
            </p>
            <li className="text-center list-none">
              <Link
                className="text-[#C5FFF8] underline hover:text-secondaryColor"
                to="/join-us"
              >
                Criteria ?
              </Link>
            </li>
            <p className=" text-white text-[10px] text-center">
              Are you passionate about making a positive contribution to the
              lives and wellbeing of adults?
            </p>
            <Link
              to="/join-us"
              className=" w-[35%] p-3 bg-[#C5FFF8] text-primaryColor text-center mx-auto rounded-lg border border-secondaryColor text-[20px] transition-all duration-300 hover:bg-transparent hover:border hover:border-white hover:text-secondaryColor"
            >
              Join Us
            </Link>
          </div>
          <div className="2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[35%] sm:w-full esm:w-full  py-5">
            <div className=" flex justify-center items-center gap-2  text-white text-[30px]">
              <div className="inline-flex gap-3 text-nowrap">
                <h6 className="font-black 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[20px] esm:text-[20px]">
                  Noor
                </h6>
                <h6 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[20px] esm:text-[20px]">
                  Home Care
                </h6>
              </div>
              <span>
                <img
                  className="w-[75px] h-[75px]"
                  src="logo-main.svg"
                  alt="main-logo"
                />
              </span>
            </div>
            <h6 className="text-center text-white  text-[16px] ">
              noorhomecare@hotmail.com
            </h6>
            <h6 className="text-center text-[#C5FFF8]  text-[16px] my-2 ">
              +07880-283423
            </h6>
            <h6 className="text-center text-white  text-[16px] my-2 ">
              Kingston upon Hull , United Kingdom
            </h6>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <p className=" text-[#C5FFF8] text-center ">
            © Copyright Noor Home Care 2024.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
