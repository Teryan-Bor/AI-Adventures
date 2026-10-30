"use client";
import Link from "next/link";
import "./header.scss";
import { useContext } from "react";
import { StageContext } from "@/app/shared/StageContext/StageContext";
import { seasons } from "@/app/shared/seasons";
import { useWeather } from "@/app/shared/WeatherContext/WeatherContext";
import { getWeatherType } from "@/services/helper";

const Header = () => {
	const { activeIndex } = useContext(StageContext);
	const {weather, status} = useWeather();

	const season = getWeatherType(weather);

	return (
		<header className="header-container">
			<Link href="/home">
				<h2 className={`logo_header gradient-text ${season}`}>
					AI Adventures
				</h2>
			</Link>

			<nav className="navbar">
				<ul className="nav-list">
					<li className="menu_link">
						<Link href={"/home"}>Home</Link>
					</li>

					<li className="menu_link"><a href="#">About us</a></li>
					
					<li className="menu_link">
						<Link href={"/adventures"}>Adventures</Link>
					</li>

				</ul>
			</nav>
		</header>
	)
}

export default Header