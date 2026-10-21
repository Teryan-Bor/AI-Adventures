import { InputField } from "./components/InputField";
import "./createPage.scss";

const CreatePage = () => {
	return (
		<div className="create-section container">
			<form action="">	
				<h2 className="create-title">Create Your Story</h2>
				<InputField />
			</form>
		</div>
	)
}

export default CreatePage