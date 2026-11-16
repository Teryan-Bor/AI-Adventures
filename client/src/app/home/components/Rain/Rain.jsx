"use client";
import { useEffect, useState } from "react";
import "./rain.scss";
import { generateParticles } from "../../utils/generateParticles";

const Rain = ({ style, className = "" }) => {
  const [rainsArr, setRains] = useState([]);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
    setRains(
      generateParticles({
        count: 150,
        size: [12, 25],
        duration: [0.5, 1],
      }),
    );
    /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
  }, []);

  return (
    <div
      className={`layer_section ${className}`}
      style={{
        ...style,
      }}
    >
      {rainsArr.map((rain) => (
        <span
          key={rain.id}
          className="flake-rain"
          style={{
            "--x": `${rain.x}%`,
            "--size": `${rain.size}px`,
            "--duration": `${rain.duration}s`,
            "--delay": `${rain.delay}s`,
            "--opacity": `${rain.opacity}`,
          }}
        />
      ))}
    </div>
  );
};

export default Rain;
