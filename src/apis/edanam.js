import axios from 'axios';

const API_ENDPOINT = 'https://api.edamam.com/api/food-database/v2/parser';
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
    const firstHint = response.data.hints[0];
    const nutrients = firstHint.food.nutrients;

    if (nutrients) {
      return {
        calories: nutrients.ENERC_KCAL,
        protein: nutrients.PROCNT || 0,
        carbs: nutrients.CHOCDF || 0,
        fats: nutrients.FAT || 0,
      };
    } else {
      console.error('Data not found');
      return { calories: 0, protein: 0, carbs: 0, fats: 0 };
    }
  } catch (error) {
    console.error('Data not found', error);
    return { calories: 0, protein: 0, carbs: 0, fats: 0 };
  }
};
