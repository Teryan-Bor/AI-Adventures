"use client";
import { useEffect, useState } from "react";
import random from "../../utils/random";
import "./rain.css";

const Rain = ({stageIndex}) => {
	const [rainsArr, setRains] = useState([]);

	useEffect(() => {
		const arr = [];
		for (let i = 0; i < 150; i++) {
			const size = random(12, 25);
			const t = (size - 12) / (25 - 12);
			let duration = 1 - t * (1 - 0.5);
			duration = Math.round(duration * 10) / 10;

			const opacity = 0.3 + t * 0.6;

			arr.push({
				id: i,
				x: random(0, 97),
				size,
				duration,
				delay: random(-20, 0),
				opacity,

			});
		}

		setRains(arr);
	}, [])

	return (
		<div 
			className="layer_section rain"
			style={{
				'opacity': stageIndex === 1 ? 1 : 0,
				'transition': 'opacity 0.2s ease-in-out'
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