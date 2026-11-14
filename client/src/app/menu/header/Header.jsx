"use client";
import Link from "next/link";
import "./header.scss";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";
import { getWeatherType } from "@/services/helper";

const Header = () => {
  const { type } = useWeather();

  return (
    <header className="header-container">
      <Link href="/home">
        <h2 className={`logo_header gradient-text ${type}`}>AI Adventures</h2>
      </Link>

      <nav className="navbar">
        <ul className="nav-list">
          <li className="menu_link">
            <Link href={"/home"}>Home</Link>
          </li>

          <li className="menu_link">
            <Link href={"/about"}>About Us</Link>
          </li>

          <li className="menu_link">
            <Link href={"/adventures"}>Adventures</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
