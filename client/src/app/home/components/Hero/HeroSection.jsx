import "./hero.scss";
import { getWeatherType } from "@/services/helper";
import { Button } from "@/shared/Button/Button";
import { useWeather } from "@/shared/WeatherContext/WeatherContext";

const HeroSection = () => {
  const { weather, status } = useWeather();
  const weatherType = getWeatherType(weather);

  return (
    <div className="hero-section">
      <h2 className="hero-title">
        Go ahead and create <span className={`gradient-text ${weatherType}`}>your own story</span>
      </h2>

      <p className="hero-text">
        Pick a character, a genre and a world, and the AI will write an adventure just for you, one step at a time.
      </p>

      <Button
        weather={weatherType}
        size={'lg'}
        href={'/create'}
      >
        Create
      </Button>
    </div >
  )
}

export default HeroSection