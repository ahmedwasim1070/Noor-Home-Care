import React from "react";

function Hero() {
  return (
    <main className="mt-5">
      <div className="relative">
        <img
          className="w-full h-[600px] object-fill"
          src="/nhc-1.webp"
          alt="backgrond"
        />
        <div className=" absolute inset-0 bg-textColor opacity-[40%]"></div>
        <div className=" absolute w-[560px] h-full bg-secondaryColor inset-0 opacity-[80%]">
          <h1 className="text-primaryColor text-[55px] font-bold m-20">
            Noor Home Care
          </h1>
        </div>
        <div className="w-[1000px] h-[120px] absolute bg-primaryColor bottom-0 left-0 right-0 mx-auto float-left rounded-2xl "></div>
      </div>
    </main>
  );
}

export default Hero;
