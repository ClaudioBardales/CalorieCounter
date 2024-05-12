import './App.css';
import React, { useState } from 'react';
import DailyCalorieCounter from './components/DailyCalorieCounter';
import SearchComponent from './components/SearchComponent';
import MealList from './components/MealList';
import WaterTracker from './components/waterTracker';
import { getNutritionData } from './apis/edanam';

const App = () => {
  const [meals, setMeals] = useState([]);
  const addMealItem = (foodItem) => {
    getNutritionData(foodItem)
      .then((calories) => {
        const mealItem = {
          id: Math.random().toString(36).slice(2, 11),
          name: foodItem,
          calories: parseFloat(calories),
          quantity: 1,
        };
        setMeals([...meals, mealItem]);
      })
      .catch((error) => console.error('API error: ', error));
  };

  const updateMealQuantity = (meal, delta) => {
    setMeals(
      meals.map((m) => {
        if (m.id === meal.id) {
          const updatedQuantity = m.quantity + delta;
          return { ...m, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
        }
        return m;
      })
    );
  };

  const deleteMealItem = (mealToDelete) => {
    setMeals(meals.filter((meal) => meal.id !== mealToDelete.id));
  };

  return (
    <div className="container-md">
      <DailyCalorieCounter meals={meals} />
      <SearchComponent onSearch={addMealItem} />
      <MealList
        meals={meals}
        onIncrease={(meal) => updateMealQuantity(meal, 1)}
        onDecrease={(meal) => updateMealQuantity(meal, -1)}
        onDelete={deleteMealItem}
      />
      <WaterTracker />
    </div>
  );
};

export default App;
