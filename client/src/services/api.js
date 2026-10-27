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