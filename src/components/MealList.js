import React from 'react';
import MealItem from './MealItem';

const MealList = ({ meals }) => {
  return (
    <div className="container meal-list bg-light text-dark p-3 m-2 rounded">
      {meals.map((meal, index) => (
        <MealItem key={index} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
