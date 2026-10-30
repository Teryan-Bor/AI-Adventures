"use client";
import {  useEffect } from "react";
import "./home.css";
import HeroSection from "./components/Hero/HeroSection";
import { Background } from "./components/Background/Background";

const HomePage = () => {
  return (
    <div className="welcome_section container">
      <Background />
      <HeroSection />
    </div>
  );
};

export default HomePage;
