import { fetchWeather } from "./api"

export const getCoordsAndWeather = async () => {
  return new Promise((resolve) => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const data = await fetchWeather(lat, lon);
          resolve(data);
        },

        async (error) => {
          const data = await fetchWeather(null, null);
          resolve(data);
        }
      );
    } else {
      fetchWeather(null, null).then(resolve);
    }
  })
}