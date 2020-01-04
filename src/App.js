import React from 'react';
import Title from './Title';
import WeatherContainer from './WeatherContainer';

const App = () => {
  return (
    <div className="main-container">
    <Title text="The Weather App"/>
    <WeatherContainer/>
    </div>
  );
}

export default App;
