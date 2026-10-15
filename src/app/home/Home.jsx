"use client";
import { useEffect, useState } from "react";
import Header from "../nav/header/Header";
import { Snow } from "./components/Snow/Snow";
import Rain from "./components/Rain/Rain";
import StagesTabs from "./components/StagesTabs/StagesTabs";
import "./home.css";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalStages = 3;
  const stageDuration = 1000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(prev => (prev + 1) % totalStages)
  //   }, stageDuration);

  //   return () => clearInterval(interval)
  // }, []);

  return (
    <div className="welcome_section">
      <Snow stageIndex={activeIndex} />
      <Rain stageIndex={activeIndex} />
      <StagesTabs />      
    </div>
  )
}

export default HomePage