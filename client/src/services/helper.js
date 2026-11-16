import { useEffect, useState } from "react";

const TTL = 10 * 60 * 1000;
const KEY = "user_weather";
const BASE = process.env.NEXT_PUBLIC_BACKGROUNDS_URL;

export const readCache = () => {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;

    const { data, ts } = JSON.parse(raw);
    return Date.now() - ts < TTL ? data : null;
  } catch (error) {
    return null;
  }
};

export const getCountry = (data) => {
  return data?.sys?.country?.toLowerCase() || "default";
};

export const getBackgroundUrl = (country, weatherType) =>
  `${BASE}/${country}/${weatherType}.jpg`;

export const useBackground = (country, weatherType) => {
  const [bgUrl, setBgUrl] = useState(null);

  useEffect(() => {
    const url = getBackgroundUrl(country, weatherType);
    const DEFAULT_BG = getBackgroundUrl("default", weatherType);

    const img = new Image();
    img.onload = () => setBgUrl(url);
    img.onerror = () => setBgUrl(DEFAULT_BG);
    img.src = url;
  }, [country, weatherType]);

  return bgUrl;
}