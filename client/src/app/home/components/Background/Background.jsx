import { useWeather } from "@/shared/WeatherContext/WeatherContext";

import Hot from "../Hot/Hot";
import Rain from "../Rain/Rain";
import Snow from "../Snow/Snow";
import Clouds from "../Clouds/Clouds";
import Lightning from "../Lightning/Lightning";
import DefaultBackground from "../Default/DefaultBackground";

import {
  getBackgroundUrl,
  getCountry,
  getWeatherType,
} from "@/services/helper";

const COMPONENTS = {
  default: DefaultBackground,
  snow: Snow,
  rain: Rain,
  hot: Hot,
  clouds: Clouds,
  thunder: Lightning,
};

export function Background() {
  const { weather, status, type } = useWeather();

  const isReady = status === "ready" && !!weather;
  const weatherType = isReady ? type : "default";

  const country = getCountry(weather);

  const backgroundUrl = getBackgroundUrl(country, weatherType);

  const Component = COMPONENTS[weatherType] ?? DefaultBackground;

  return (
    <Component
      style={{ '--bg-url': `url(${backgroundUrl})` }}
      className={`bg-[image:var(--bg-url)]`}
    />
  );
}
