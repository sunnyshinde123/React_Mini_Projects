import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WeatherAppSearchBox from './weatherApp/WeatherAppSearchBox';
import WeatherAppTab from './weatherApp/WeatherAppTab';
import Password from './Password/Password';
import HealthyAppSearchBox from './HealthyApp/HealthAppSearchBox';
import HealthyAppItemInfo from './HealthyApp/HealthAppItemInfo';
import HealthyApp from './HealthyApp/HealthyApp';
import './App.css';

function App() {
  
  return (
    <>
    <HealthyApp></HealthyApp>
    </>
  )
}

export default App
