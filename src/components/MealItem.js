import React from 'react';

const MealItem = ({ meal }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div className="meal-name">
        {meal.name} <span className="text-muted">{meal.quantity}</span>
      </div>
      <div className="calories">{meal.calories}</div>
      <button className="btn btn-outline-danger btn-sm">+</button>
    </div>
  );
};

export default MealItem;
