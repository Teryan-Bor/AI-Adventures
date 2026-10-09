import "../../home.css";
import { CreateButton } from "../Button/Button"

export const Hero = (props) => {
	return (
			<section className="hero-section">
				<h1>{props.section}</h1>
				<CreateButton text={"Create your story"} />

			</section>


	)
}