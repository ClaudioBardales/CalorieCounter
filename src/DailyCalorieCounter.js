import React from 'react';
import MealSection from './MealSection';

const DailyCalorieCounter = () => {
  return (
    <div className="daily-calorie-counter bg-danger text-white p-3 rounded">
      <h1 className="display-4">0/2150 CALORIES</h1>
      {/* Icons and other elements go here */}
      <div className="meal-section">
        {/* Map through meal types and display MealSection components */}
        <MealSection mealType="Breakfast" />
      </div>
    </div>
  );
};

export default DailyCalorieCounter;
