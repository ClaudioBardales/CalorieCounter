import React from 'react';

const MealItem = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div className="meal-name">
        {mealName} <span className="text-muted">{quantity}</span>
      </div>
      <div className="calories">{calories}</div>
      <button className="btn btn-outline-danger btn-sm">+</button>
    </div>
  );
};
