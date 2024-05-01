import React from 'react';
import MealItem from './MealItem';

const MealList = ({ meals }) => {
  return (
    <div className="meal-list bg-light text-dark p-3 rounded">
      {meals.map((meal, index) => (
        <MealItem key={index} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
