import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function header() {
  return (
    <header className="h-[90px] flex flex-row flex-wrap gap-y-2 px-20">
      <div className="w-[50%] h-full flex items-center gap-8 ">
        <div>
          <img className="w-[70px] h-[70px]" src="/logo-main.svg" alt="Home" />
        </div>
        <div>
          <h1 className=" text-[28px] font-bold text-textColor ">
            Noor Home Care
          </h1>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-end gap-5">
        <div>
          <FontAwesomeIcon color="#2C4E80" icon={faPhone} size="2x" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className=" text-primaryColor text-[25px] font-bold">+</p>
          <h1 className="text-textColor text-[25px] font-bold">07880 283423</h1>
        </div>
      </div>
    </header>
  );
}

export default header;
