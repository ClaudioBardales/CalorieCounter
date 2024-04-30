import './App.css';
import React from 'react';
import DailyCalorieCounter from './DailyCalorieCounter';
import MealList from './MealList';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-3">
          {/* Left Panel */}
          <DailyCalorieCounter />
        </div>
        <div className="col-md-6 p-3">
          {/* Right Panel */}
          <MealList />
        </div>
      </div>
    </div>
  );
};

export default App;
