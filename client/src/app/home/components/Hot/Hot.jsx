import { useEffect, useState } from "react";
import random from "../../utils/random";
import "./hot.css";
import { generateParticles } from "../../utils/generateParticles";
import { FlakeSpan } from "../Background/components/FlakeSpan";
import { getWeatherType } from "@/services/helper";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";

const Hot = () => {
	const [hotArr, setHot] = useState([]);
	const { weather, status } = useWeather();

	const season = getWeatherType(weather);

	useEffect(() => {
		/* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
		setHot(generateParticles());
		 /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
	}, [])

	return (
		<div
			className="layer_section hot"
			style={{
				'opacity': season === "hot" ? '1' : '0',
			}}
		>
			{hotArr.map(item => (
				<FlakeSpan key={item.id} ownType={"hot"} item={item} />
			))}
		</div>
	)
}

export default Hot