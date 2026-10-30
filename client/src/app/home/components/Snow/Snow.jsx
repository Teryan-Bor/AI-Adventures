'use client';
import { useEffect, useMemo, useState } from "react";
import "./snow.css";
import "@/app/home/components/Snow/snow.css";
import { FlakeSpan } from "../Background/components/FlakeSpan";
import { generateParticles } from "../../utils/generateParticles";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";
import { getWeatherType } from "@/services/helper";

export const Snow = () => {
	const [flakesArr, setFlakesArr] = useState([]);
	const { weather, status } = useWeather();
	const season = getWeatherType(weather);

	useEffect(() => {
		/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
		setFlakesArr(generateParticles({
			count: 80,
			size: [2, 6],
			drift: [10, 40]
		}))
		 /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
	}, []);

	return (
		<div
			className="layer_section snow"
			style={{
				'opacity': season === "snow" ? 1 : 0,
			}}
		>
			{flakesArr.map(flake => (
				<FlakeSpan key={flake.id} ownType={"snow"} item={flake} />
			))}

		</div>
	)
}