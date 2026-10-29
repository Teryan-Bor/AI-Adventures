const API_URL = process.env.API_URL || "http://127.0.0.1:8000"

export async function createStory(data) {
  try {
    const response = await fetch(`${API_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    
    return await response.json();

  } catch (error) {
    console.error("Error:", error);
  }  
}

export const fetchWeather = async (lat, lon) => {
  const params = new URLSearchParams();

  if(lat != null && lon != null) {
    params.set("lat", lat);
    params.set("lon", lon);
  }

  const query = params.toString();

  const url = `${API_URL}/weather${query ? `?${query}` : ""}`;

  const response = await fetch(url);

  if(!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`)
  }

  const data = await response.json();

  try {
   sessionStorage.setItem(
    'user_weather',
    JSON.stringify({ data, ts: Date.now() })
  );
  } catch (error) {
    throw new Error("Storage is unavailable")
  }
  
  return data;
}

