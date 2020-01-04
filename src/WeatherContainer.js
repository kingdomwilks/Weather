import React from 'react';
import WeatherItem from './WeatherItem';
import SelectedDayContainer from './SelectedDayContainer';
import {WEATHER_DATA} from './WEATHER_DATA';
import {BrowserRouter, Route} from 'react-router-dom';



class WeatherContainer extends React.Component {

    state = {
        weather: WEATHER_DATA,
        selectedDayId: 0
    }

    handleDaySelected = (dayId) => {
            this.setState({
                selectedDayId: dayId
            });
        }

    routingLogic = () => {
        if (this.state.selectedDayId === 0) {
            return "/monday"
        }
        if (this.state.selectedDayId === 1) {
            return "/tuesday"
        }
        if (this.state.selectedDayId === 2) {
            return "/wednesday"
        }
        if (this.state.selectedDayId === 3) {
            return "/thursday"
        }
        if (this.state.selectedDayId === 4) {
            return "/friday"
        }
        if (this.state.selectedDayId === 5) {
            return "/saturday"
        }
        if (this.state.selectedDayId === 6) {
            return "/sunday"
        }
    }

   

    render() {
        console.log(this.routingLogic());

        return (
            <div>
            <div className="weather-container">
                {this.state.weather.map(weath => 
                    <WeatherItem
                    key={weath.id}
                    weath={weath}
                    selectedDayId={this.state.selectedDayId}
                    onDaySelected={this.handleDaySelected}
                    />
                )}
            </div>
            <SelectedDayContainer
                selectedDayId={this.state.selectedDayId}
                weather={this.state.weather}
            />
                            
            </div>
            
        );
        }
}


export default WeatherContainer;