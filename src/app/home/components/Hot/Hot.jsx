import { useEffect, useState } from "react";
import random from "../../utils/random";
import "./hot.css";

const Hot = ({ stageIndex }) => {
	const [hotArr, setHot] = useState([]);

	useEffect(() => {
		const arr = [];

		for (let i = 0; i < 50; i++) {
			const size = random(3, 7);
			const t = (size - 3) / (7 - 3);
			let duration = 20 - t * (20 - 8);
			duration = Math.round(duration * 10) / 10;

			const opacity = 0.3 + t * 0.6;

			arr.push({
				id: i,
				x: random(0, 97),
				size,
				duration,
				delay: random(-20, 0),
				drift: random(10, 30),
				driftDuration: random(3, 8),
				opacity,
			})
		}

		setHot(arr);
	}, [])

	return (
		<div
			className="layer_section hot"
			style={{
				'opacity': stageIndex === 2 ? '1' : '0',
				'transition': 'opacity 0.2s linear'
			}}
		>
			{hotArr.map(item => (
				<span
					key={item.id}
					className="flake-wrapper hot"
					style={{
						'--x': `${item.x}%`,
						'--size': `${item.size}px`,
						'--duration': `${item.duration}s`,
						'--delay': `${item.delay}s`,
						'--opacity': `${item.opacity}`
					}}
				>
					<span
						className="flake hot"
						style={{
							'--drift': `${item.drift}px`,
							'--driftDuration': `${item.driftDuration}s`
						}}
					/>
		
				</span>
			))}
		</div>
	)
}

export default Hot