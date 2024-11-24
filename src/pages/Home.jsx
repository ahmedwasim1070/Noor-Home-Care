import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Services from "../component/Services";
import Footer from "../component/Footer";

function home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default home;
