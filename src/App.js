import './App.css';
import React, { useState } from 'react';
import DailyCalorieCounter from './components/DailyCalorieCounter';
import SearchComponent from './components/SearchComponent';
import MealList from './components/MealList';
import { getNutritionData } from './apis/edanam';

const App = () => {
  const [meals, setMeals] = useState([]);
  const addMealItem = (foodItem) => {
    getNutritionData(foodItem)
      .then((data) => {
        const mealItem = {
          name: foodItem,
          calories: parseInt(data.calories, 10),
          quantity: 1,
        };
        setMeals([...meals, mealItem]);
      })
      .catch((error) => console.error('API error: ', error));
  };

  return (
    <div className="container-md">
      <DailyCalorieCounter meals={meals} />
      <SearchComponent onSearch={addMealItem} />
      <MealList meals={meals} />
    </div>
  );
};

export default App;
