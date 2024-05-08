import React from 'react';
import MealItem from './MealItem';

const MealList = ({ meals, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="container mx-auto meal-list bg-light text-dark p-3 m-2 rounded">
      {meals.map((meal, index) => (
        <MealItem
          key={index}
          meal={meal}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MealList;
