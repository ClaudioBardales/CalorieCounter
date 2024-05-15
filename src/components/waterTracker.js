import React, { useState } from 'react';
import { getDatabase, ref, runTransaction } from 'firebase/database';
// eslint-disable-next-line
import { database } from '../service/firebaseConfig';

const WaterTracker = () => {
  const [intake, setIntake] = useState(0);
  const database = getDatabase();

  const handleAddWater = () => {
    setIntake((prev) => prev + 250); // Increase by 250ml
    updateDatabase(250);
  };

  const updateDatabase = (amount) => {
    const today = new Date().toISOString().slice(0, 10);
    const waterRef = ref(database, 'waterIntakes/' + today);

    runTransaction(waterRef, (currentData) => {
      return (currentData || 0) + amount;
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center gap-4">
      <h3>Today's Water Intake: {intake} ml</h3>
      <button className="btn btn-primary" onClick={handleAddWater}>
        Add 250ml
      </button>
    </div>
  );
};

export default WaterTracker;
