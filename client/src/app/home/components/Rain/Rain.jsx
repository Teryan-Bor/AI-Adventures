"use client";
import { useEffect, useState } from "react";
import random from "../../utils/random";
import "./rain.css";
import { generateParticles } from "../../utils/generateParticles";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";
import { getWeatherType } from "@/services/helper";

const Rain = () => {
	const [rainsArr, setRains] = useState([]);
	const { weather, status } = useWeather();

	const season = getWeatherType(weather);

	useEffect(() => {
		/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
		setRains(generateParticles({
			count: 150,
			size: [12, 25],
			duration: [0.5, 1]
		}))
		 /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
	}, [])

	return (
		<div 
			className="layer_section rain"
			style={{
				'opacity': season === "rain" ? 1 : 0,
			}}
		>
			{rainsArr.map(rain => (
				<span 
					key={rain.id}
					className="flake-rain"
					style={{
						'--x': `${rain.x}%`,
						'--size': `${rain.size}px`,
						'--duration': `${rain.duration}s`,
						'--delay': `${rain.delay}s`,
						'--opacity': `${rain.opacity}`
					}}
				/>

			))}
		</div>
	);
}

export default Rain;