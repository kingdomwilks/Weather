import React from 'react';
import Title from './Title';
import WeatherContainer from './WeatherContainer';
import {
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="main-container">
      <Title text="The Weather App" />
      <WeatherContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
