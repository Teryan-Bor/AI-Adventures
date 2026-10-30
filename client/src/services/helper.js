import { fetchWeather } from "./api";

const TTL = 10 * 60 * 1000;
const KEY = "user_weather";

const getPosition = async () => {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) return resolve(null);

    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ lat: position.coords.latitude, lon: position.coords.longitude}),
      () => resolve(null),
      { timeout: 8000, maximumAge: 5*60*1000 }  
    );
  
  });
};

const readCache = () => {
  try {
    const raw = sessionStorage.getItem(KEY);
    if(!raw) return null;

    const { data, ts } = JSON.parse(raw);
    return Date.now() - ts < TTL ? data : null;

  } catch (error) {
    return null;
  }
}

export const getCoordsAndWeather = async () => {
  const cached = readCache();
  if(cached) return cached;

  const coords = await getPosition();
  return await fetchWeather(coords?.lat, coords?.lon);
}

export const getWeatherType = (data) => {
  const main = data?.weather[0]?.main;
  const temp = data?.main?.temp;

  const RAIN_GROUPS = ["Rain", "Drizzle", "Thunderstorm"];  
  const HOT_TEMP = 25;

  if(main === "snow") return "snow";
  if(RAIN_GROUPS.includes(main)) return "rain";
  if(temp !== null && temp >= HOT_TEMP) return "hot";

  return "snow";
}