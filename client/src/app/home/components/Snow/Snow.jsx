"use client";
import { useEffect, useState } from "react";
import "./snow.scss";
import { FlakeSpan } from "../Background/components/FlakeSpan";
import { generateParticles } from "../../utils/generateParticles";

const Snow = ({ style, className = "" }) => {
  const [flakesArr, setFlakesArr] = useState([]);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
    setFlakesArr(
      generateParticles({
        count: 80,
        size: [2, 6],
        drift: [10, 40],
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
      {flakesArr.map((flake) => (
        <FlakeSpan key={flake.id} className={'bg-white'} item={flake} />
      ))}
    </div>
  );
};

export default Snow;
