import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
   const data = {
     name: "priyanka store",
   };

  
  return (
    <div>
      <HeroSection myData={data} />;
      <Services />
    <Trusted/>
     <Footer/>
    </div>
  );
  
};


export default Home;
