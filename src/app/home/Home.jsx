import Header from "../nav/header/Header";
import { Hero } from "./components/Hero/Hero";
import "./home.css";

const Hello = () => {
  return (
    <div className="page">

      <Hero section="Hero Section via Props" />
      <Header />

      <footer className="footer">
        <p>footer 1</p>
        <p>footer 2</p>
        <p>footer 3</p>
        <p>footer 4</p>
      </footer>
    </div>
  )
}

export default Hello