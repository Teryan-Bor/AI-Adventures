"use client";
import { useEffect, useState } from "react";
import Header from "../menu/header/Header";
import { Snow } from "./components/Snow/Snow";
import Rain from "./components/Rain/Rain";
import Hot from "./components/Hot/Hot";
import StagesTabs from "./components/StagesTabs/StagesTabs";
import "./home.css";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalStages = 3;
  const stageDuration = 8000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % totalStages)
    }, stageDuration);

    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <Header />
      <div className="welcome_section container">
        <Snow stageIndex={activeIndex} />
        <Rain stageIndex={activeIndex} />
        <Hot stageIndex={activeIndex} />
        <StagesTabs stageIndex={activeIndex} />      
      </div>
    </>
    
  )
}

export default HomePage