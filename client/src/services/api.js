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
  let url = `${API_URL}/weather`;

  if(lat && lon) {
    url += `?lat=${lat}&lon=${lon}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  
  sessionStorage.setItem('user_weather', JSON.stringify(data));
  return data;
}

