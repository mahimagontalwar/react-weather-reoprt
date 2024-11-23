import React from 'react';
import WeatherWidget from './WeatherWidget'; // Assuming WeatherWidget is in the same directory

const App = () => {
  return (
    <div className="App">
      <h1>Real-Time Weather Dashboard</h1>
      <WeatherWidget />
    </div>
  );
};

export default App;