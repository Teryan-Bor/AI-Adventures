import Link from "next/link";
import "./header.scss";

const Header = () => {
	return (
		<header className="header-container">
			<Link href="/home">
				<h2 className="logo_header gradient-text">
					AI Adventures
				</h2>
			</Link>

			<nav className="navbar">
				<ul className="nav-list">
					<li className="menu_link"><a href="#">About us</a></li>
					<li className="menu_link"><a href="#">Contact us</a></li>
					<li className="menu_link"><a href="#">Novels</a></li>
				</ul>
			</nav>
			<button className="register-button">Sign Up</button>
		</header>
	)
}

export default Header