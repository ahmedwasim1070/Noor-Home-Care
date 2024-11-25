import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

function JoinusPage() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-row 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap  md:flex-wrap sm:flex-wrap esm:flex-wrap relative">
          <div className="2xl:w-[35.50%] xl:w-[35.50%] lg:w-[35.50%] md:w-full sm:w-full esm:w-full 2xl:h-[600px] xl:h-[550px] lg:h-[500px]  2xl:bg-secondaryColor/50 xl:bg-secondaryColor/50 lg:bg-secondaryColor/50 md:bg-gradient-to-b md:from-secondaryColor/95 md:to-secondaryColor sm:bg-gradient-to-b sm:from-secondaryColor/95 sm:to-secondaryColor esm:bg-gradient-to-b esm:from-secondaryColor/95 esm:to-secondaryColor  2xl:p-20 xl:p-20 lg:p-16 md:p-10 sm:p-10 esm:p-10 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 esm:order-2">
            <div className="text-white w-full 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-[25%] sm:pl-[20%] esm:pl-0 2xl:block xl:block lg:block md:block sm:block  esm:flex esm:justify-center">
              <div className="2xl:w-[250px] xl:w-[240px] lg:w-[220px] md:w-[250px] sm:w-[200px] esm:w-[180px] 2xl:h-[80px] xl:h-[78px] lg:h-[70px] md:h-[65px] sm:h-[65px] esm:h-[65px] bg-primaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[36px] xl:text-[34px] lg:text-[28px] md:text-[22px] sm:text-[22px] esm:text-[22px] cursor-pointer  font-bold transition-all duration-500 hover:translate-x-[50px] ">
                <h2>What</h2>
              </div>
            </div>
            <div className="text-white  flex justify-center 2xl:px-0 xl:px-4 lg:px-4 md:px-6 sm:px-6">
              <div className="2xl:w-[350px] xl:w-[340px] lg:w-[320px] md:w-[320px] sm:w-[300px] esm:w-[280px] 2xl:h-[70px] xl:h-[68px] lg:h-[60px] md:h-[60px]  sm:h-[60px] esm:h-[60px] bg-primaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[24px] xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] esm:text-[18px]  font-bold cursor-pointer transition-all duration-500 hover:translate-x-[-50px]">
                <h2>We Offer ?</h2>
              </div>
            </div>
            <div className="text-primaryColor flex 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-10  w-full 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center sm:mt-10 esm:mt-10 esm:justify-center">
              <p className="2xl:text-[24px] xl:text-[23px] lg:text-[22px]  md:text-[22px] sm:text-[22px] esm:text-[20px] text-center">
                For employers seeking skilled healthcare staff
              </p>
            </div>
          </div>
          <div className="2xl:w-[65.50%] xl:w-[65.50%] lg:w-[65.50%]  md:w-full sm:w-full esm:w-full 2xl:h-[600px] xl:h-[550px] lg:h-[500px] md:h-[350px] sm:h-[300px] esm:h-[280px] relative md:order-1">
            <img
              className="w-full h-full  "
              src="nhc-hero-joinus.webp"
              alt="Nurse helping old women "
            />
            <div className=" absolute inset-0 w-full h-full 2xl:bg-primaryColor xl:bg-primaryColor lg:bg-primaryColor 2xl:opacity-[30%] xl:opacity-[30%] lg:opacity-[30%] md:bg-gradient-to-b md:from-white/10 md:to-primaryColor/95 sm:bg-gradient-to-b sm:from-white/10 sm:to-primaryColor/95 esm:bg-gradient-to-b esm: esm:from-white/5 esm:to-primaryColor/95"></div>
          </div>
        </section>
      </main>
      <div className="w-full flex justify-center">
        <div className="2xl:w-[900px] xl:w-[850px] lg:w-[750px] md:w-[80%] sm:w-[80%] esm:w-[80%] h-[80px] bg-secondaryColor rounded-[5px] flex items-center justify-center my-10">
          <p className=" text-white  font-bold 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[32px] esm:text-[30px]">
            Employe Facilities
          </p>
        </div>
      </div>
      <div className="w-full h-full flex items-center 2xl:my-30 xl:my-30 lg:my-30 md:my-30 sm:my-10 esm:my-6 justify-center">
        <div className="2xl:container xl:container lg:container md:container sm:container-none esm:container-none 2xl:mx-auto xl:mx-10 lg:mx-auto md:mx-auto sm:mx-10 esm:mx-2 2xl:p-10 xl:p-16 lg:p-10 md:p-10 sm:p-8 esm:p-4 bg-secondaryColor/80 rounded-2xl flex flex-row items-center justify-center overflow-x-hidden  gap-10 gap-y-20 border-black shadow-2xl shadow-primaryColor flex-wrap">
          <div
            className={` relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[250px] bg-secondaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 justify-center }`}
          >
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[85%] esm:w-[80%]  h-[70px] text-nowrap  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
              <h6 className="text-white  font-bold 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[19px]">
                Employer Support
              </h6>
            </div>
            <div>
              <p className="text-center text-primaryColor 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[17px] esm:text-[16px] mx-10 ">
                We focus on building strong relationships and adaptable
                arrangements that work for everyone. Use our services as needed,
                with no long-term contract required.
              </p>
            </div>
            <div className="w-full h-full absolute inset-0 bg-gradient-to-l from-transparent to-black/30"></div>
          </div>
          <div
            className={`2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%]  h-[250px] bg-primaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 scale-[1.07] justify-center `}
          >
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[85%] esm:w-[80%] h-[70px] text-nowrap  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
              <h6 className="text-white 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[19px] font-bold">
                Transparent Pricing
              </h6>
            </div>
            <div>
              <p className="text-center text-white 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[17px] esm:text-[16px] mx-10">
                Our rates include staff taxes and liability coverage with no
                additional VAT, ensuring you only pay the quoted amount.
              </p>
            </div>
          </div>
          <div
            className={` relative 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] esm:w-[98%] h-[250px] bg-secondaryColor rounded-[10px] overflow-hidden flex flex-col gap-y-5 shadow-2xl shadow-primaryColor flex-nowrap flex-shrink-0 justify-center }`}
          >
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[85%] esm:w-[80%]  h-[70px] text-nowrap  mx-auto  bg-primaryColor border border-[rgba(255,255,255,0.2)] rounded-[10px] flex justify-center items-center shadow-2xl">
              <h6 className="text-white  font-bold 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[19px]">
                Flexible Contracts
              </h6>
            </div>
            <div>
              <p className="text-center text-primaryColor 2xl:text-[18px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[17px] esm:text-[16px] mx-10 ">
                We offer competitive pricing structures for long-term
                partnerships and are available to discuss your staffing needs
                24/7.
              </p>
            </div>
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
          </div>
        </div>
      </div>

      <div className="2xl:w-[900px] xl:w-[850px] lg:w-[750px] md:w-[80%] sm:w-[80%] esm:w-[80%] h-[80px] text-primaryColor font-bold my-20 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[19px] text-center mx-auto">
        Let’s work together to find the right care for you or your loved one.
        Schedule a free care consultation to explore how our services can meet
        your unique needs.
      </div>

      <Footer />
    </>
  );
}

export default JoinusPage;
