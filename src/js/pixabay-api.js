import axios from "axios";

const API_KEY = "50678696-ed6f097088bf5690dd98584b9";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query, page = 1) {
  const per_page = 15;
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: page,
    per_page: per_page,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw new Error("Failed to fetch images from Pixabay.");
  }
}