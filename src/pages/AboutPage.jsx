import React, { useEffect, useRef } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Helmet } from "react-helmet";

function AboutPage() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Helmet>
        <title>About | Noor Home Care</title>
      </Helmet>
      <Header />
      <main className="smothUp fade-in  opacity-0 transition-opacity duration-1000 ease-in-out">
        <section className="flex flex-row 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap  md:flex-wrap sm:flex-wrap esm:flex-wrap relative">
          <div className="2xl:w-[35.50%] xl:w-[35.50%] lg:w-[35.50%] md:w-full sm:w-full esm:w-full 2xl:h-[600px] xl:h-[550px] lg:h-[500px]  2xl:bg-primaryColor xl:bg-primaryColor lg:bg-primaryColor md:bg-gradient-to-b md:from-primaryColor/95 md:to-primaryColor sm:bg-gradient-to-b sm:from-primaryColor/95 sm:to-primaryColor esm:bg-gradient-to-b esm:from-primaryColor/95 esm:to-primaryColor 2xl:opacity-[95%] xl:opacity-[95%] lg:opacity-[95%] 2xl:p-20 xl:p-20 lg:p-16 md:p-10 sm:p-10 esm:p-10 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 esm:order-2">
            <div className="text-white w-full 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-[25%] sm:pl-[20%] esm:pl-0 2xl:block xl:block lg:block md:block sm:block  esm:flex esm:justify-center">
              <div className="2xl:w-[250px] xl:w-[240px] lg:w-[220px] md:w-[250px] sm:w-[200px] esm:w-[180px] 2xl:h-[80px] xl:h-[78px] lg:h-[70px] md:h-[65px] sm:h-[65px] esm:h-[65px] bg-secondaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[36px] xl:text-[34px] lg:text-[28px] md:text-[22px] sm:text-[22px] esm:text-[22px] cursor-pointer  font-bold transition-all duration-500 hover:translate-x-[50px] ">
                <h2>Who</h2>
              </div>
            </div>
            <div className="text-white  flex justify-center 2xl:px-0 xl:px-4 lg:px-4 md:px-6 sm:px-6">
              <div className="2xl:w-[350px] xl:w-[340px] lg:w-[320px] md:w-[320px] sm:w-[300px] esm:w-[280px] 2xl:h-[70px] xl:h-[68px] lg:h-[60px] md:h-[60px]  sm:h-[60px] esm:h-[60px] bg-secondaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[24px] xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] esm:text-[18px]  font-bold cursor-pointer transition-all duration-500 hover:translate-x-[-50px]">
                <h2>Are We ?</h2>
              </div>
            </div>
            <div className="text-white flex 2xl:mt-20 xl:mt-20 lg:mt-20 md:mt-10  w-full 2xl:justify-start xl:justify-start lg:justify-start md:justify-center sm:justify-center sm:mt-10 esm:mt-10 esm:justify-center">
              <p className="2xl:text-[24px] xl:text-[23px] lg:text-[22px]  md:text-[22px] sm:text-[22px] esm:text-[20px] text-center">
                Commited of providing Care Services to your loved where they
                comfortable at.
              </p>
            </div>
          </div>
          <div className="2xl:w-[65.50%] xl:w-[65.50%] lg:w-[65.50%]  md:w-full sm:w-full esm:w-full 2xl:h-[600px] xl:h-[550px] lg:h-[500px] md:h-[350px] sm:h-[300px] esm:h-[280px] relative md:order-1">
            <img
              className="w-full h-full  "
              src="nhc-hero-about.webp"
              alt="About in writeen with orange background"
            />
            <div className=" absolute inset-0 w-full h-full 2xl:bg-primaryColor xl:bg-primaryColor lg:bg-primaryColor 2xl:opacity-[30%] xl:opacity-[30%] lg:opacity-[30%] md:bg-gradient-to-b md:from-white/10 md:to-primaryColor/95 sm:bg-gradient-to-b sm:from-white/10 sm:to-primaryColor/95 esm:bg-gradient-to-b esm: esm:from-white/5 esm:to-primaryColor/95"></div>
          </div>
        </section>
      </main>
      <section
        ref={aboutRef}
        className="opacity-0 transition-opacity duration-1000 ease-in-out "
      >
        <div className="w-full 2xl:p-20 xl:p-20 lg:p-20 md:p-20 sm:p-4 esm:p-4 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 sm:pt-16 esm:pt-16 flex justify-center items-center">
          <div className=" 2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-full esm:w-full flex flex-col gap-y-10 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center esm:items-center">
            <p className="2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[44px] esm:text-[42px] text-primaryColor font-bold text-nowrap">
              About Us
            </p>
            <article className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[20px] 2xl:text-start xl:text-start lg:text-start md:text-start sm:text-center esm:text-center">
              <h1>A Home Care Service in UK</h1>
              <br />
              At Noor Home Care, we pride ourselves on offering a comprehensive
              range of personalized home care services designed to help our
              clients maintain their independence, dignity, and comfort while
              staying in the familiar surroundings of their own homes. We
              understand that home is where cherished memories reside, and it is
              our mission to ensure you or your loved ones can enjoy the peace
              and security that comes from being in a place filled with
              familiarity and love. Noor Home Care is dedicated to providing
              tailored care solutions that meet the unique needs of each
              individual, fostering a sense of well-being and independence while
              delivering the highest standards of compassionate support.
              <br />
              <br />
              <br />
              Our home care services at Noor Home Care are built around the
              principle that every individual deserves respect, empathy, and
              high-quality care. Whether it's assistance with daily routines,
              companionship, or specialized support, we strive to make life more
              manageable and fulfilling for our clients. From early morning to
              late at night, Noor Home Care is here to ensure every aspect of
              home care is handled with professionalism and attention to detail,
              helping our clients feel safe, secure, and cared for in their own
              homes.
              <br />
              <br />
              <br />
              We offer a wide array of home care services, including morning
              assistance to help start the day with ease, such as support with
              getting up, dressing, and preparing breakfast. Our team at Noor
              Home Care understands the importance of medication management,
              providing timely reminders or administration to ensure clients
              stay on track with their health needs. In addition, we assist with
              household tasks like cleaning, laundry, and ironing, ensuring that
              the home remains a welcoming and organized space for our clients
              to relax and thrive.
              <br />
              <br />
              <br />
              Respite care is another vital service provided by Noor Home Care,
              giving primary caregivers the chance to rest and recharge while
              knowing their loved ones are in capable and caring hands. We also
              assist with errands and outings, such as grocery shopping,
              organizing social activities, or arranging enjoyable day trips.
              These moments of connection and activity are important for
              maintaining a balanced and engaging lifestyle, and Noor Home Care
              is dedicated to making these experiences as smooth and enjoyable
              as possible. For evening and bedtime routines, our compassionate
              caregivers are available to help clients wind down, prepare for
              sleep, and settle in for a restful night, ensuring they feel
              supported and cared for every step of the way.
              <br />
              <br />
              <br />
              At Noor Home Care, we understand that the needs of our clients do
              not end when the day is over, which is why we also provide
              specialized night care services. Whether it’s a sleeping night
              where caregivers are on hand to assist when needed or a waking
              night where our team remains awake and alert to provide continuous
              support, Noor Home Care ensures that clients are cared for around
              the clock. Our night care services are particularly beneficial for
              those who experience restlessness, require regular assistance, or
              simply feel more secure knowing someone is there to help during
              the quiet hours of the night.
              <br />
              <br />
              <br />
              Noor Home Care is not just about meeting the practical needs of
              our clients; it’s about building relationships based on trust,
              empathy, and genuine care. We believe that everyone deserves to
              feel respected and valued, and our team works tirelessly to create
              a supportive environment that promotes well-being and happiness.
              Whether it’s through friendly companionship, attentive assistance,
              or personalized care plans, Noor Home Care is here to make a
              difference in the lives of those we serve.
              <br />
              <br />
              <br />
              Our commitment to excellence at Noor Home Care means we
              continuously strive to exceed expectations, ensuring that every
              client receives the highest level of care tailored to their
              specific needs. By choosing Noor Home Care, you are not just
              selecting a home care provider; you are partnering with a team
              that genuinely cares about your health, happiness, and quality of
              life. With Noor Home Care, you can rest assured that you or your
              loved one will be supported with compassion and expertise,
              allowing you to focus on what truly matters: enjoying life to the
              fullest in the comfort of your own home.
              <br />
              <br />
              <br />
            </article>
          </div>
        </div>
      </section>
      <section className="2xl:text-[24px] xl:text-[23px] lg:text-[22px]  md:text-[22px] sm:text-[22px] esm:text-[20px] text-center font-bold text-primaryColor my-10">
        <p>Contact Us</p>
      </section>
      <section className="w-full p-10 bg-gradient-to-b from-secondaryColor/40 to-primaryColor flex items-center justify-center">
        <div className="w-[70%] flex flex-row items-center justify-evenly flex-wrap gap-10">
          <a
            href="tel:+07880283423"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center cursor-pointer group gap-2 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor"
          >
            <span>
              <svg
                width="23"
                height="23"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" group-hover:fill-primaryColor"
                  d="M10.5658 2.3033L11.7015 4.33844C12.7265 6.17503 12.3151 8.58433 10.7007 10.1987C10.7007 10.1987 8.74279 12.1569 12.2929 15.7072C15.8419 19.2562 17.8013 17.2993 17.8013 17.2993C19.4157 15.6849 21.8249 15.2735 23.6616 16.2985L25.6966 17.4342C28.47 18.9819 28.7975 22.8712 26.3599 25.3089C24.8951 26.7737 23.1007 27.9134 21.1171 27.9885C17.7779 28.1152 12.107 27.2701 6.41847 21.5816C0.72998 15.893 -0.115129 10.2222 0.0114661 6.88292C0.0866636 4.89931 1.2264 3.10491 2.69117 1.64016C5.12883 -0.797512 9.01805 -0.469981 10.5658 2.3033Z"
                  fill="#f4f4f4"
                />
              </svg>
            </span>
            <p className="text-[24px] text-secondaryColor group-hover:text-primaryColor">
              +
            </p>
            <h1 className="text-[24px]">07880-283423</h1>
          </a>
          <a
            href="mailto:noorhomecare@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center group gap-4  cursor-pointer transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor"
          >
            <span>
              <svg
                className=" group-hover:fill-primaryColor stroke-white group-hover:stroke-secondaryColor"
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.55556 21.4286L10.3333 12M27.4444 21.4286L19.6667 12M1 5.71429L12.2389 13.2832C13.2368 13.9553 13.7356 14.2915 14.275 14.4219C14.7516 14.5374 15.2484 14.5374 15.725 14.4219C16.2644 14.2915 16.7632 13.9553 17.7611 13.2832L29 5.71429M5.97778 23H24.0222C25.7646 23 26.6359 23 27.3013 22.6574C27.8867 22.3562 28.3627 21.8753 28.6609 21.284C29 20.6117 29 19.7316 29 17.9714V6.02857C29 4.26841 29 3.38832 28.6609 2.71603C28.3627 2.12466 27.8867 1.64386 27.3013 1.34256C26.6359 1 25.7646 1 24.0222 1H5.97778C4.2354 1 3.3642 1 2.6987 1.34256C2.1133 1.64386 1.63736 2.12466 1.3391 2.71603C1 3.38832 1 4.2684 1 6.02857V17.9714C1 19.7316 1 20.6117 1.3391 21.284C1.63736 21.8753 2.1133 22.3562 2.6987 22.6574C3.3642 23 4.23538 23 5.97778 23Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h1 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] sm:text-[24px] esm:text-[20px]">
              Email Us
            </h1>
          </a>
          <a
            href="https://maps.app.goo.gl/6tCupRRfw334AgcD6?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center group gap-4 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor"
          >
            <span>
              <svg
                className=" group-hover:fill-primaryColor stroke-white group-hover:stroke-secondaryColor"
                width="27"
                height="35"
                viewBox="0 0 27 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 33.1429C19.75 26.7143 26 20.9579 26 13.8571C26 6.75634 20.4036 1 13.5 1C6.59645 1 1 6.75634 1 13.8571C1 20.9579 7.25 26.7143 13.5 33.1429Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 18.8571C16.4587 18.8571 18.8571 16.4587 18.8571 13.5C18.8571 10.5413 16.4587 8.14282 13.5 8.14282C10.5412 8.14282 8.14282 10.5413 8.14282 13.5C8.14282 16.4587 10.5412 18.8571 13.5 18.8571Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h1 className="2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[24px] esm:text-[22px]">
              Find Us
            </h1>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;
