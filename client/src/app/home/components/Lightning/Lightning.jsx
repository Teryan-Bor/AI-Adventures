"use client";

import { useEffect, useState } from "react";
import { generateLightningStrike } from "./boltGenerate";

import styles from "./lightning.scss";

const Lightning = ({ style, className = "", intervalMs = 3000 }) => {
  const [strike, setStrike] = useState(null);

  useEffect(() => {
    const trigger = () => {
      setStrike(generateLightningStrike());
    };

    trigger(); // Первый разряд сразу после монтирования в браузере
    const intervalId = setInterval(trigger, intervalMs);

    // Обязательная очистка таймера при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [intervalMs]);

  if (!strike) return null;

  return (
    <div className={`layer_section ${className}`} style={{ ...style }}>
      {/* key={strike.id} заставляет React пересоздавать обёртку и перезапускать CSS-анимацию с 0% */}
      <div key={strike.id} className={styles.strikeWrapper}>
        {strike.bolts.map((bolt) => (
          <div
            key={bolt.id}
            className={styles.bolt}
            style={{
              clipPath: bolt.clipPath,
              opacity: bolt.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightning;
