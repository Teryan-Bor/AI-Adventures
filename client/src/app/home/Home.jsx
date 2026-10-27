"use client";
import { useContext, useEffect, useState } from "react";
import { Snow } from "./components/Snow/Snow";
import Rain from "./components/Rain/Rain";
import Hot from "./components/Hot/Hot";
import StagesTabs from "./components/StagesTabs/StagesTabs";
import "./home.css";
import { StageContext } from "../shared/StageContext/StageContext";
import HeroSection from "./components/Hero/HeroSection";
import { getCoordsAndWeather } from "@/services/helper";

const HomePage = () => {
  const {activeIndex } = useContext(StageContext);

  useEffect(() => {
    getCoordsAndWeather();
  }, [])
  
  return (
    <div className="welcome_section container">
      <Snow stageIndex={activeIndex} />
      <Rain stageIndex={activeIndex} />
      <Hot stageIndex={activeIndex} />
      <StagesTabs stageIndex={activeIndex} /> 

      <HeroSection activeIndex={activeIndex} />  
    </div>
    
  )
}

export default HomePage