import Link from "next/link";
import "./button.scss";

export const Button = (
	{ type = "button",
		season,
		size = 'md',
		className = "",
		href,
		children,
		...rest
	}) => {
	const classes = ["button", size, season, className].filter(Boolean).join(" ");

	if (href) {
		return (
			<Link href={href} className={classes} {...rest}>
				{children}
			</Link>
		)
	}

	return (
		<button type={type} className={classes} {...rest}>
			{children}
		</button>
	)
}