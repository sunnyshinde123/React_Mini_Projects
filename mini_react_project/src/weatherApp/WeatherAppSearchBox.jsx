import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function WeatherAppSearchBox({handleWeatherInfo}){
    let [city, setCity]=useState("");

    let handleOnChange=(event)=>{
        setCity(event.target.value);
    }

    let handleOnSubmit=(event)=>{
        console.log(city);
        handleWeatherInfo(city);
        event.preventDefault();
        setCity("");
    }

    return (
        <>
        <div className='mb-3'>
            <h4>Search for the weather...</h4>
            <form action="/" onSubmit={handleOnSubmit}>
                <TextField id="city" label="City" variant="outlined" name='city' value={city} onChange={handleOnChange}/>
                <br /><br />
                <Button variant="outlined" type='submit'>Search</Button>
            </form>
        </div>
        </>
    )
}