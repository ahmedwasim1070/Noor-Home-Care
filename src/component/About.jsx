import React from "react";

function About() {
  return (
    <section>
      <div className="w-full h-[1000px] flex justify-center items-center ">
        <div className="w-[1000px] h-[600px] flex flex-col gap-y-10">
          <p className="text-[48px] text-primaryColor font-bold">About Us</p>
          <article className="text-[24px]">
            At Noor Home Care, we are committed to providing the care and
            support that allows you to stay comfortably in your own home. With
            us, you can enjoy the comfort of familiar surroundings, surrounded
            by your belongings and cherished memories, while friends and family
            are welcome to visit anytime. Our compassionate team at Noor Home
            Care is here to help you maintain independence and peace of mind,
            delivering high-quality, personalized care right where you feel most
            at home.
          </article>
          <h3 className="text-primaryColor text-[24px] font-bold">
            Our compassionate home care services help clients maintain
            independence and comfort in their own homes, offering personalized
            assistance throughout the day.
          </h3>
        </div>
      </div>
    </section>
  );
}

export default About;
