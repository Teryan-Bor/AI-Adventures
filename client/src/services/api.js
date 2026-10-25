const API_URL = process.env.API_URL || "http://127.0.0.1:8000"

export async function createStory(data) {
  console.log(API_URL, "API URL backend");
  console.log(data, "data inside createStory method");
  
  const response = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  console.log(response, "response");
  return response.json()
}