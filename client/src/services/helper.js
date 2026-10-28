import { fetchWeather } from "./api";

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

export const getCoordsAndWeather = async () => {
  const coords = await getPosition();
  return await fetchWeather(coords?.lat, coords?.lon);
}
