import { getCoordsAndWeather } from "@/services/helper";
import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext = createContext({weather: null, status: "loading"});

export function WeatherProvider({children}) {
  const [state, setState] = useState({weather: null, status: "loading"});

  useEffect(() => {
    let cancelled = false;

    getCoordsAndWeather()
      .then((weather) => {
        if(!cancelled) setState({weather, status: "ready"});
      })
      .catch(() => {
        if(!cancelled) setState({weather: null, status: "error"})
      })

    return () => { cancelled = true; };
  }, []);

  return <WeatherContext value={state}> {children} </WeatherContext>
}

export const useWeather = () => useContext(WeatherContext);