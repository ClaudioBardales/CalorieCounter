import React from 'react';

const MealSection = () => {
  return (
    <div className="meal-section my-3">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="h5">{mealType}</h2>
        <button className="btn btn-light">+</button>
      </div>
      {/* Insert meal items here */}
    </div>
  );
};

export default MealSection;
