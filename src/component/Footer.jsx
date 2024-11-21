import React from "react";

function Footer() {
  return (
    <section>
      <div className="w-full h-[250px] bg-primaryColor mt-20">
        <div className="container mx-auto px-20 flex flex-row ">
          <div className="w-[30%] p-10">
            <ul className="text-white underline flex flex-col gap-5">
              <li className=" hover:text-secondaryColor ">
                <a href="">Contact Us</a>
              </li>
              <li className=" hover:text-secondaryColor ">
                <a href="">Privacy Policy</a>
              </li>
              <li className=" hover:text-secondaryColor ">
                <a href="">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="w-[40%] flex flex-col item-center gap-y-3 my-10">
            <p className=" text-white text-[14px] text-center">
              Become a part of our Team
            </p>
            <a
              className="text-secondaryColor underline text-[16px] text-center hover:text-white"
              href="#"
            >
              Criteria ?
            </a>
            <button className=" w-[35%] p-3 bg-secondaryColor text-white mx-auto rounded-lg border border-secondaryColor text-[20px] transition-all duration-300 hover:bg-transparent hover:border hover:border-white">
              Join Us
            </button>
          </div>
          <div className="w-[35%] py-5">
            <div className="flex justify-center items-center gap-2  text-white text-[30px]">
              <div className="inline-flex gap-3">
                <h1 className="font-black">Noor</h1>
                <h1>Home Care</h1>
              </div>
              <span>
                <img
                  className="w-[75px] h-[75px]"
                  src="logo-main.svg"
                  alt="main-logo"
                />
              </span>
            </div>
            <h2 className="text-center text-white  text-[16px] ">
              noorhomecare@hotmail.com
            </h2>
            <h2 className="text-center text-secondaryColor  text-[16px] my-2 ">
              +07880-283423
            </h2>
            <h2 className="text-center text-white  text-[16px] my-2 ">
              Kingston upon Hull , United Kingdom
            </h2>
          </div>
        </div>
        <div className="container mx-auto pr-14">
          <h3 className=" text-white text-center ">
            © Copyright Noor Home Care 2024.{" "}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Footer;
