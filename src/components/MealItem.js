const MealItem = ({ meal, onDecrease, onIncrease, onDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center py-2">
      <div className="meal-name">{meal.name}</div>
      <div className="calories">{meal.calories} kcal</div>
      <div className="protein">{meal.protein}g Protein</div>
      <div className="carbs">{meal.carbs}g Carbs</div>
      <div className="fats">{meal.fats}g Fats</div>
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
