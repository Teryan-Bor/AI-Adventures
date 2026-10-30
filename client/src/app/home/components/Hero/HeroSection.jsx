import "./hero.scss";
import { Button } from "@/app/shared/Button/Button"
import { seasons } from "@/app/shared/seasons";
import { useWeather } from "@/app/shared/WeatherContext/WeatherContext";
import { getWeatherType } from "@/services/helper";

const HeroSection = () => {
  const { weather, status } = useWeather();
  const season = getWeatherType(weather);

  return (
    <div className="hero-section">
      <h2 className="hero-title">
        Go ahead and create <span className={`gradient-text ${season}`}>your own story</span>
      </h2>

      <p className="hero-text">
        Pick a character, a genre and a world, and the AI will write an adventure just for you, one step at a time.
      </p>

      <Button
        season={season}
        size={'lg'}
        href={'/create'}
      >
        Create
      </Button>
    </div >
  )
}

export default HeroSection