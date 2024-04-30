import React from 'react';
import MealItem from './MealItem';

export const MealList = () => {
  return (
    <div className="meal-list bg-light text-dark p-3 rounded">
      <h1 className="display-5">
        TODAY <span className="text-danger">670/2150 CALORIES</span>
      </h1>
      {/* Insert list of meals here */}
      <MealItem mealName="Parantha" calories="289 Cal" quantity="1.0" />
      {/* Repeat for other meals */}
    </div>
  );
};
