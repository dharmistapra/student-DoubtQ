import React from "react"; 
import Aboutarea from "./Aboutarea";
import Apparea from "./Apparea";
import Bannerarea from "./Bannerarea";
import Benefits from "./Benefits";
import Bonus from "./Bonus";
import Bonusoffer from "./Bonusoffer";
import Servicesarea from "./Servicesarea";
import Students from "./Students";
import Homecarousel from "./Homecarousel";

const Home = () => {
  return (
    <>
      <Bannerarea/>
      <Servicesarea />
      <Bonusoffer/>
      <Bonus/>
      <Students/>
      <Benefits/>
      <Apparea/>
      <Homecarousel />
      <Aboutarea />
    </>

  )
}

export default Home;