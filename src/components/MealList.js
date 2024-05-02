import React from 'react';
import MealItem from './MealItem';

// const MealList = ({ meals }) => {
//   return (
//     <div className="container meal-list bg-light text-dark p-3 rounded">
//       {meals.map((meal, index) => (
//         <MealItem key={index} meal={meal} />
//       ))}
//     </div>
//   );
// };

const MealList = ({ meals }) => {
  // Placeholder meals if no meals are provided or while data is loading
  const placeholderMeals = [
    { name: 'Pizza', calories: 285, quantity: 1 },
    { name: 'Salad', calories: 150, quantity: 1 },
    { name: 'Burger', calories: 300, quantity: 1 },
    { name: 'Ice Cream', calories: 207, quantity: 1 },
  ];

  // Use actual meals if provided, otherwise use placeholders
  const displayMeals = meals.length > 0 ? meals : placeholderMeals;

  return (
    <div className="container meal-list bg-light text-dark p-3 rounded">
      {displayMeals.map((meal, index) => (
        <MealItem key={index} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
