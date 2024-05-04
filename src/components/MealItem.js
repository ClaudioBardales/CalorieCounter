import React from 'react';

const MealItem = ({ meal, onDecrease, onIncrease, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-2">
      <div className="meal-name">{meal.name}</div>
      <div className="calories">{meal.calories}</div>
      <button
        onClick={() => onDecrease(meal)}
        className="btn btn-outline-secondary btn-sm"
      >
        -
      </button>
      <span className="text-muted">{meal.quantity}</span>
      <button
        onClick={() => onIncrease(meal)}
        className="btn btn-outline-secondary btn-sm"
      >
        +
      </button>
      <button
        onClick={() => onDelete(meal)}
        className="btn btn-outline-danger btn-sm"
      >
        X
      </button>
    </div>
  );
};

export default MealItem;
