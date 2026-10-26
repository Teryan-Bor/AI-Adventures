"use client";
import Link from "next/link";
import "./header.scss";
import { useContext } from "react";
import { StageContext } from "@/app/shared/StageContext";

const Header = () => {
	const { activeIndex } = useContext(StageContext);

	const seasons = ["winter", "fall", "summer"];

	return (
		<header className="header-container">
			<Link href="/home">
				<h2 className={`logo_header gradient-text ${seasons[activeIndex]}`}>
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
		</header>
	)
}

export default Header