import React from "react";
import Header from "../component/header";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

function home() {
  return (
    <div className=" container mx-auto">
      <Header />
      <hr className=" mx-auto my-2 font-bold border-[rgba(0,0,0,0.3)]" />
      <Navbar />
      <Hero />
    </div>
  );
}

export default home;
