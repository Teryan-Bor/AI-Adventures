import "./hero.scss";
import { Button } from "@/app/shared/Button/Button"
import { seasons } from "@/app/shared/seasons";

const HeroSection = ({ activeIndex }) => {
  return (
    <div className="hero-section">
      <h2 className="hero-title">
        Go ahead and create <span className={`gradient-text ${seasons[activeIndex]}`}>your own story</span>
      </h2>

      <p className="hero-text">
        Pick a character, a genre and a world, and the AI will write an adventure just for you, one step at a time.
      </p>

      <Button
        season={seasons[activeIndex]}
        size={'lg'}
        href={'/create'}
      >
        Create
      </Button>
    </div >
  )
}

export default HeroSection