import axios from 'axios';

const API_ENDPOINT = 'https://api.edamam.com/api/nutrition-data';
const APP_ID = 'bba7bbd7';
const APP_KEY = 'fdade7e59be9ee5fbbc4dd6770c02e46';

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
