import { useWeather } from "@/shared/WeatherContext/WeatherContext";
import Hot from "../Hot/Hot";
import Rain from "../Rain/Rain";
import Snow  from "../Snow/Snow";
import Clouds from "../Clouds/Clouds";
import { getWeatherType } from "@/services/helper";

const COMPONENTS = {
  snow: Snow,
  rain: Rain,
  hot: Hot,
  clouds: Clouds,
}

export function Background() {
  const {weather, status} = useWeather();

  if(status !== "ready" || !weather) return <Snow />

  const Component = COMPONENTS[getWeatherType(weather)] ?? Snow;
  return <Component data={weather}/>
}