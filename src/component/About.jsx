import React from "react";

function About() {
  return (
    <section>
      <div className="w-full 2xl:p-20 xl:p-20 lg:p-20 md:p-20 sm:p-4 esm:p-4 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 sm:pt-16 esm:pt-16 flex justify-center items-center">
        <div className=" 2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-full esm:w-full flex flex-col gap-y-10 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center esm:items-center">
          <p className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[44px] esm:text-[42px] text-primaryColor font-bold text-nowrap">
            About Us
          </p>
          <article className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[20px] 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-center esm:text-center">
            At Noor Home Care, we are committed to providing the care and
            support that allows you to stay comfortably in your own home. With
            us, you can enjoy the comfort of familiar surroundings, surrounded
            by your belongings and cherished memories, while friends and family
            are welcome to visit anytime. Our compassionate team at Noor Home
            Care is here to help you maintain independence and peace of mind,
            delivering high-quality, personalized care right where you feel most
            at home.
          </article>
          <h3 className="text-primaryColor  font-bold 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[20px] 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-center esm:text-center">
            Our compassionate home care services help clients maintain
            independence and comfort in their own homes, offering personalized
            assistance throughout the day.
          </h3>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="2xl:w-[900px] xl:w-[850px] lg:w-[750px] md:w-[80%] sm:w-[80%] esm:w-[80%] h-[80px] bg-primaryColor rounded-[5px] flex items-center justify-center my-10">
          <p className=" text-white  font-bold 2xl:text-[36px] xl:text-[36px] lg:text-[36px] md:text-[36px] sm:text-[32px] esm:text-[30px]">
            What We Offer
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
