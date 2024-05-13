import React from 'react';

const DailyCalorieCounter = ({ meals, dailyGoal }) => {
  const totalCalories = meals.reduce((acc, meal) => {
    return acc + meal.calories * meal.quantity;
  }, 0);

  return (
    <div className="daily-calorie-counter bg-danger text-white p-3 m-2 rounded">
      <h1 className="d-flex justify-content-center display-1">
        {totalCalories}/{dailyGoal} CALORIES
      </h1>
    </div>
  );
};

export default DailyCalorieCounter;
