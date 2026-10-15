'use client';
import { useEffect, useState } from "react";
import "../Snow/snow.css";

const random = (min, max) => {
	const randVal = min + Math.random() * (max - min);

	return Math.round(randVal * 10) / 10
}

export const Snow = () => {
	const [flakesArr, setFlakesArr] = useState([]);

	useEffect(() => {
		const arr = [];

		for (let i = 0; i < 80; i++) {
			const size = random(2, 6);
			const t = (size - 2) / (6 - 2);

			let duration = 20 - t * (20 - 8);
			duration = Math.round(duration * 10) / 10;

			const opacity = 0.3 + t * 0.6

			const randomObject = {
				id: i,
				x: random(0, 97),
				duration,
				size,
				delay: random(-20, 0),
				drift: random(10, 40),
				driftDuration: random(3, 8),
				opacity,
			}

			arr.push(randomObject);
		}

		setFlakesArr(arr);
	}, [])



	return (
		<div className="snow-layer_section">
			{flakesArr.map(flake => (
				<span 
					key={flake.id}
					className="flake-wrapper"
					style={{
						'--x': `${flake.x}%`,
						'--size': `${flake.size}px`,
						'--duration': `${flake.duration}s`,
						'--delay': `${flake.delay}s`,
						'--opacity': `${flake.opacity}`
					}}

					>
				
					<span
						className="flake"
						style={{
							'--drift': `${flake.drift}px`,
							'--driftDuration': `${flake.driftDuration}s`
						}}

					/>
				</span>
			))}
		</div>
	)
}