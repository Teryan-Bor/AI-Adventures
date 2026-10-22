import { FieldSection } from "@/app/shared/FieldSection/FieldSection";
import { storyField } from "./storyFields";
import "./StoryForm.scss";

const StoryForm = () => {
	return (
		<div className="form-section">
			<h2 className="form-title gradient-text">Create Your Story</h2>
			<form action="" className="fields-wrapper">	
				{storyField.map((item) => (
					<FieldSection 
						key={item.name} 
						name={item.name} 
						label={item.label}
						type={item.type}
						options={item.options}
						min={item.min}
						max={item.max}
					/>

				))}
			</form>
		</div>
		
	)
}

export default StoryForm