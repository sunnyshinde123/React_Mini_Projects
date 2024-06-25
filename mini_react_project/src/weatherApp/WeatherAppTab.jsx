import { useState } from "react";
import WeatherAppSearchBox from "./WeatherAppSearchBox"
import WeatherAppDetails from "./WeatherAppDetails";
import { useEffect } from "react";
import "./WeatherAppTab.css"

export default function WeatherAppTab(){
    let [getInfo, setGetInfo]=useState({
            City:"Delhi",
            Feels_like:21.34,
            Humidity:55,
            Temp:27.7,
            Temp_Max:27.7,
            Temp_Min:27.7,
            Description:"Cloudy"
    });

    let [error, setError]=useState(false);
    let API_KEY="879dee36b80619aa99a5312921318dda";



    let handleWeatherInfo=async(city)=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            let response=await fetch(url);
            let data=await response.json();
            
            let newObj={
                City:city,
                Feels_like:data.main.feels_like,
                Humidity:data.main.humidity,
                Temp:data.main.temp,
                Temp_Max:data.main.temp_max,
                Temp_Min:data.main.temp_min,
                Description:data.weather[0].description
            }
            setGetInfo(newObj);
        }catch(err){
            setError(true);
        }
    }

    useEffect(()=>{
        console.log(getInfo);
    }, [getInfo]);


    return (
        <>
        <div className='Box'>
            <WeatherAppSearchBox handleWeatherInfo={handleWeatherInfo}></WeatherAppSearchBox>
            {error && <h6>No Such Place Exists!!!</h6>}
            <hr />
            <WeatherAppDetails getInfo={getInfo}></WeatherAppDetails>
        </div>
        </>
    )
}