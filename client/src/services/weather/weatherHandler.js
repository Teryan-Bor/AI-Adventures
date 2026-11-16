import { fetchWeather } from "../api/api";
import { readCache } from "../helper";

const getPosition = async () => {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) return resolve(null);

    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      () => resolve(null),
      { timeout: 8000, maximumAge: 5 * 60 * 1000 },
    );
  });
};


export const getCoordsAndWeather = async () => {
  const cached = readCache();
  if (cached) return cached;

  const coords = await getPosition();
  return await fetchWeather(coords?.lat, coords?.lon);
};

export const getWeatherType = (data) => {
  if (!data) return "default";

  const main = data?.weather[0]?.main?.toLowerCase();
  const temp = data?.main?.temp;

  const HOT_TEMP = 25;
  const weatherMap = {
    snow: "snow",
    clouds: "clouds",
    thunderstorm: "thunder",
    rain: "rain",
    drizzle: "rain",
    mist: "rain"
  }

  if (temp !== undefined && temp >= HOT_TEMP) { 
    return "hot"
  } 
  
  return weatherMap[main] ?? "default";
};