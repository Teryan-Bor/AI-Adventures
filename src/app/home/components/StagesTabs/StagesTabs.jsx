import "./stagesTabs.css";

const StagesTabs = ({ stageIndex }) => {

	return (
		<div className="stages-tabs">
			{[0,1,2].map(i => (
				<div 
					key={i}
					className={`stage ${i === stageIndex ? "active" : ""}`} 
				/>
			))} 
		</div>
	)
}

export default StagesTabs