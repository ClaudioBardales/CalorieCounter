import React, { useState } from 'react';

const UserProfile = ({ onSaveGoals }) => {
  const [dailyCalories, setDailyCalories] = useState(2000);

  const handleSave = () => {
    onSaveGoals({ calories: Number(dailyCalories) });
  };

  return (
    <div className="input-group d-flex gap-2 justify-content-center m-3">
      <h2>User Dietary Goals</h2>
      <input
        className="form-control"
        type="number"
        value={dailyCalories}
        onChange={(e) => setDailyCalories(e.target.value)}
      />
      <button
        className="input-group-append btn btn-primary"
        onClick={handleSave}
      >
        Save Goals
      </button>
    </div>
  );
};

export default UserProfile;
