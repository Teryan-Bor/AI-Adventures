import Header from "../nav/header/Header";
import { Hero } from "./components/Hero/Hero";
import { Snow } from "./components/Snow/Snow";
import "./home.css";

const Hello = () => {
  return (
    <div className="welcome_section">
      <Snow />
    </div>
  )
}

export default Hello