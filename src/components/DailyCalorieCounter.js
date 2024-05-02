import React from 'react';
import MealList from './MealList';

const DailyCalorieCounter = ({ meals }) => {
  const totalCalories = meals.reduce(
    (acc, meal) => acc + meal.calories * meal.quantity,
    0
  );

  return (
    <div className="daily-calorie-counter bg-danger text-white p-3 m-2 rounded">
      <h1 className="d-flex justify-content-center display-1">
        {totalCalories}/2150 CALORIES
      </h1>
      {/* <MealList meals={meals} /> */}
    </div>
  );
};

export default DailyCalorieCounter;
