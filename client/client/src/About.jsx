import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './context/productcontext';


const About = () => {

  const myName = useProductContext();

  const data = {
    name: "priyanka store",
    
  }
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
  
}

export default About