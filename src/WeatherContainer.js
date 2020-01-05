import React from 'react';
import WeatherItem from './WeatherItem';
import WeatherList from './WeatherList';
import SelectedDayContainer from './SelectedDayContainer';
import {WEATHER_DATA} from './WEATHER_DATA';
import {
    Switch,
    Route,
  } from "react-router-dom";
  


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

    render() {
        return (
            <div>
            <Switch>
                <Route exact path="/">
                    <WeatherList
                        weather={this.state.weather}
                        selectedDayId={this.state.selectedDayId}
                        onDaySelected={this.handleDaySelected}    
                        />
                </Route>
                <Route path="/day">
                    <WeatherList
                        weather={this.state.weather}
                        selectedDayId={this.state.selectedDayId}
                        onDaySelected={this.handleDaySelected}    
                    />
                    <SelectedDayContainer
                        selectedDayId={this.state.selectedDayId}
                        weather={this.state.weather}
                    />
                </Route> 
            </Switch>
            </div>
        );
        }
}


export default WeatherContainer;