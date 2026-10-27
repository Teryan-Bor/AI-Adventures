import Link from "next/link";
import "./button.scss";

export const Button = (
	{ season,
		size = 'md',
		href,
		children
	}) => {
	return (
		<Link href={href} className={`button ${size} ${season}`}>
			{children}
		</Link>


	)
}