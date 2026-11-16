"use client";
import "./home.scss";
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
