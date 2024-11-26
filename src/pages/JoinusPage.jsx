import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Header from "../component/Header";
import Footer from "../component/Footer";

function JoinusPage() {
  const [fileName, setFileName] = useState("");
  const [isFile, setIsFile] = useState("");
  const fileInputRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cv: isFile,
  });
  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    cv: false,
  });
  const handleInpClick = () => {
    fileInputRef.current.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;

    let newErrorState = { ...errorState };
    if (formData.name.length <= 2 || formData.name.length >= 36) {
      newErrorState.name = true;
      formValid = false;
    } else {
      newErrorState.name = false;
    }
    if (formData.email.length <= 4 || formData.email.length >= 52) {
      newErrorState.email = true;
      formValid = false;
    } else {
      newErrorState.email = false;
    }
    if (formData.cv) {
      newErrorState.cv = true;
      formValid = false;
    } else {
      newErrorState.cv = false;
    }
    setErrorState(newErrorState);
    if (!formValid) {
      return;
    }
    emailjs
      .send(
        "service_vg57kot",
        "template_rjxgysl",
        formData,
        "Fjy-fcxiwoKe8eMct"
      )
      .then((response) => {
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            cv: setIsFile(null),
          });
        }, 300);
      })
      .catch((err) => {
        toast.error("Failed ! Try Again Later");
        setLoading(false);
      });
  };
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-row 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap  md:flex-wrap sm:flex-wrap esm:flex-wrap relative">
          <div className="2xl:w-[35.50%] xl:w-[35.50%] lg:w-[35.50%] md:w-full sm:w-full esm:w-full 2xl:h-[600px] xl:h-[550px] lg:h-[500px]  2xl:bg-secondaryColor/50 xl:bg-secondaryColor/50 lg:bg-secondaryColor/50 md:bg-gradient-to-b md:from-secondaryColor/95 md:to-secondaryColor sm:bg-gradient-to-b sm:from-secondaryColor/95 sm:to-secondaryColor esm:bg-gradient-to-b esm:from-secondaryColor/95 esm:to-secondaryColor  2xl:p-20 xl:p-20 lg:p-16 md:p-10 sm:p-10 esm:p-10 2xl:order-1 xl:order-1 lg:order-1 md:order-2 sm:order-2 esm:order-2">
            <div className="text-white w-full 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-[25%] sm:pl-[20%] esm:pl-0 2xl:block xl:block lg:block md:block sm:block  esm:flex esm:justify-center">
              <div className="2xl:w-[250px] xl:w-[240px] lg:w-[220px] md:w-[250px] sm:w-[200px] esm:w-[180px] 2xl:h-[80px] xl:h-[78px] lg:h-[70px] md:h-[65px] sm:h-[65px] esm:h-[65px] bg-primaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[36px] xl:text-[34px] lg:text-[28px] md:text-[22px] sm:text-[22px] esm:text-[22px] cursor-pointer  font-bold transition-all duration-500 hover:translate-x-[50px] ">
                <h2>Join</h2>
              </div>
            </div>
            <div className="text-white  flex justify-center 2xl:px-0 xl:px-4 lg:px-4 md:px-6 sm:px-6">
              <div className="2xl:w-[350px] xl:w-[340px] lg:w-[320px] md:w-[320px] sm:w-[300px] esm:w-[280px] 2xl:h-[70px] xl:h-[68px] lg:h-[60px] md:h-[60px]  sm:h-[60px] esm:h-[60px] bg-primaryColor border rounded-[2px] border-primaryColor flex items-center justify-center  2xl:text-[24px] xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] esm:text-[18px]  font-bold cursor-pointer transition-all duration-500 hover:translate-x-[-50px]">
                <h2>Our Team</h2>
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

      <div className="2xl:w-[900px] xl:w-[850px] lg:w-[750px] md:w-[80%] sm:w-[80%] esm:w-[80%]  text-primaryColor font-bold my-20 2xl:text-[24px] xl:text-[24px] lg:text-[24px] md:text-[24px] sm:text-[22px] esm:text-[19px] text-center mx-auto">
        Let’s work together to find the right care for you or your loved one.
        Schedule a free care consultation to explore how our services can meet
        your unique needs.
      </div>

      <section className="2xl:w-[70%] xl:w-[75%] lg:w-[80%] md:w-[88%] sm:w-[95%] esm:w-[95%] mx-auto flex">
        <div
          className="w-full bg-primaryColor/80 py-10  px-10 rounded-t-3xl text-white"
          action=""
        >
          <div className="text-center">
            <p className="font-bold 2xl:text-[48px] xl:text-[48px] lg:text-[48px] md:text-[48px] sm:text-[44px] esm:text-[42px]">
              Apply Now
            </p>
          </div>
          <form className="my-20 flex gap-10 flex-col text-[20px]" action="">
            <div className="">
              <input
                name="name"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={formData.name}
                className="2xl:w-[45%] xl:w-[45%] lg:w-[50%] md:w-[55%] sm:w-[60%] esm:w-[85%] h-[50px] outline-none border-none bg-primaryColor text-white rounded-lg text-[20px] p-2 px-4 placeholder:text-white shadow-primaryColor shadow-2xl  "
                placeholder="Name... "
                type="text"
              />
            </div>
            <div>
              <input
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={formData.email}
                className="2xl:w-[50%] xl:w-[50%] lg:w-[55%] md:w-[60%] sm:w-[65%] esm:w-[90%]  h-[50px] outline-none border-none bg-primaryColor text-white rounded-lg text-[20px] p-2 px-4 placeholder:text-white shadow-primaryColor shadow-2xl  "
                placeholder="Email... "
                type="email"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center my-4  ">
              <div
                onClick={handleInpClick}
                className="w-[180px] h-[180px] flex flex-col justify-center gap-y-2 items-center rounded-xl border border-white/40 bg-primaryColor/70 cursor-pointer hover:border-white hover:bg-primaryColor/40 overflow-hidden"
              >
                <span>
                  <svg
                    className="w-[45px] h-[45px] stroke-white fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
                <label
                  className="text-[16px] text-start text-nowrap"
                  htmlFor=""
                >
                  {fileName.length >= 1 ? fileName : "Upload CV"}
                </label>
                <input
                  ref={fileInputRef}
                  value={formData.cv}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (
                      file.type === "application/pdf" &&
                      file.size <= 500000
                    ) {
                      setFileName(file.name);
                      setIsFile(file);
                    } else {
                      setFileName("");
                      setIsFile(null);
                    }
                  }}
                  className="hidden"
                  name="fileUpload"
                  accept="application/pdf"
                  type="file"
                  required
                />
                <p className="text-[12px] font-bold">
                  PDF only smaller then 500 kb
                </p>
              </div>
            </div>
          </form>
          <div onsu className="">
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className="flex items-center justify-center gap-4 mx-auto py-4 border border-primaryColor px-10 rounded-2xl bg-secondaryColor transition-all duration-300 group hover:bg-secondaryColor/40 hover:border-white/70  "
            >
              <p className="text-[22px] font-bold">Submit</p>
              <span>
                <svg
                  className="w-[24px] h-[20px] border-primaryColor fill-secondaryColor stroke-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Complete">
                      <g id="tick">
                        <polyline
                          points="3.7 14.3 9.6 19 20.3 5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polyline>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="w-full p-10 bg-gradient-to-b from-primaryColor/70 to-primaryColor flex items-center justify-center">
        <div className="w-[70%] flex flex-row items-center justify-evenly flex-wrap gap-10">
          <a
            href="tel:+07880283423"
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
          <button className="flex flex-row items-center justify-center group gap-4 transition-all duration-300 text-white border border-white px-5 py-4 rounded-full hover:bg-secondaryColor hover:border-secondaryColor">
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
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default JoinusPage;
