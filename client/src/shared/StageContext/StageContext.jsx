"use client";
import { createContext, useState, useEffect } from "react";

export const StageContext = createContext({ activeIndex: 0, setActiveIndex: () => {} });

export const StageProvider = ({children}) => {
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
    <StageContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </StageContext.Provider>
  );
}