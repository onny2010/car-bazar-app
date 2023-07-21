import React from "react";
import About from "../../About/About";
import Banner from "../Banner/Banner";
import HomeService from "../HomeService/HomeService";
import Mechanics from "../Mechanics/Mechanics";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <HomeService></HomeService>
      <Mechanics/>
      <Review></Review>
    </>
  );
};

export default Home;
