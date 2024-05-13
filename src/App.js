import './App.css';
import React, { useState } from 'react';
import DailyCalorieCounter from './components/DailyCalorieCounter';
import SearchComponent from './components/SearchComponent';
import MealList from './components/MealList';
import WaterTracker from './components/waterTracker';
import UserProfile from './components/UserProfile';
import { getNutritionData } from './apis/edanam';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dailyGoal, setDailyGoal] = useState(2000);

  const handleGoalChange = (goalData) => {
    setDailyGoal(goalData.calories);
  };

  const addMealItem = (foodItem) => {
    setIsLoading(true); // Set loading to true at the beginning of the fetch operation
    setError(null);
    getNutritionData(foodItem)
      .then((nutrientData) => {
        if (nutrientData && nutrientData.calories > 0) {
          // Check if data is valid
          const mealItem = {
            id: Math.random().toString(36).slice(2, 11),
            name: foodItem,
            calories: nutrientData.calories,
            protein: nutrientData.protein,
            carbs: nutrientData.carbs,
            fats: nutrientData.fats,
            quantity: 1,
          };
          setMeals((prevMeals) => [...prevMeals, mealItem]);
          setIsLoading(false); // Set loading to false after meal is added
        } else {
          console.error('Data not available for this item');
          setError('Data not available for this item');
          setIsLoading(false); // Ensure to turn off loading even if data isn't available
        }
      })
      .catch((error) => {
        console.error('API error: ', error);
        setError('Failed to fetch nutrition data');
        setIsLoading(false); // Ensure to turn off loading on error
      });
  };

  const updateMealQuantity = (meal, delta) => {
    setMeals((prevMeals) =>
      prevMeals.map((m) => {
        if (m.id === meal.id) {
          const updatedQuantity = m.quantity + delta;
          return { ...m, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
        }
        return m;
      })
    );
  };

  const deleteMealItem = (mealToDelete) => {
    setMeals((prevMeals) =>
      prevMeals.filter((meal) => meal.id !== mealToDelete.id)
    );
  };

  return (
    <div className="container-md">
      {error && <p className="text-danger">Error: {error}</p>}
      <UserProfile onSaveGoals={handleGoalChange} />
      <DailyCalorieCounter meals={meals} dailyGoal={dailyGoal} />
      <SearchComponent onSearch={addMealItem} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MealList
          meals={meals}
          onIncrease={(meal) => updateMealQuantity(meal, 1)}
          onDecrease={(meal) => updateMealQuantity(meal, -1)}
          onDelete={deleteMealItem}
        />
      )}
      <WaterTracker />
    </div>
  );
};

export default App;
