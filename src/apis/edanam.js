import axios from 'axios';

const API_ENDPOINT = 'https://api.edamam.com/api/nutrition-data';
const APP_ID = 'bba7bbd7';
const APP_KEY = '17095c14d222439b9a4c43769a5f4559';

export const getNutritionData = async (foodItem) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}`, {
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        ingr: foodItem,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error; // Consider handling this more gracefully in a production app
  }
};
