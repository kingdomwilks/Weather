import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherList = (props) => {
    return (
        <div className="weather-container">
                {props.weather.map(weath => 
                    <WeatherItem
                    key={weath.id}
                    weath={weath}
                    selectedDayId={props.selectedDayId}
                    onDaySelected={props.onDaySelected}
                    />
                )}
            </div>
    );
}

export default WeatherList;