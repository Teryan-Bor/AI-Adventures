"use client";
import { useContext, useEffect, useState } from "react";
import { Snow } from "./components/Snow/Snow";
import Rain from "./components/Rain/Rain";
import Hot from "./components/Hot/Hot";
// import StagesTabs from "./components/StagesTabs/StagesTabs";
import "./home.css";
// import { StageContext } from "../shared/StageContext/StageContext";
import HeroSection from "./components/Hero/HeroSection";
import { getCoordsAndWeather } from "@/services/helper";
import { Background } from "./components/Background/Background";

const HomePage = () => {
  // const {activeIndex } = useContext(StageContext);

  useEffect(() => {
    getCoordsAndWeather();
  }, []);

  return (
    <div className="welcome_section container">
      <Background />
      {/* <StagesTabs /> */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
