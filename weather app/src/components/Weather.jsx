import React, { useEffect, useState } from 'react'
import Searchbar from './shared/Searchbar';
import clearSkyIcon from "../assets/images/clear_sky.png"
import lightRainIcon from "../assets/images/light_rain.png"
import heavyRainIcon from "../assets/images/heavy_rain.png"
import snowIcon from "../assets/images/snow.jpg"
import thunderstormIcon from "../assets/images/thunderstorm.png"


const Weather = () => {
    const [city, setCity] = useState("Kolkata");
    const [weatherData, setWeatherData] = useState();
const allTcons = {
    "01d": clearSkyIcon,
}

const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log("name====>",response);
    // const icons = allTcons[icons]
  setWeatherData({
    description: response?.weather[0].description,
   temperature: response?.main.temp,
    humidity: response?.main.humidity,
    pressure: response?.main.pressure ,
    visibility: response?.visibility,
    windspeed: response?.wind.speed,
    name: response?.name
  })
  }
    


    const handleSearch = (newCity) => {
        setCity(newCity);
        fetchWeather(newCity)
        console.log(newCity)
    }
    useEffect(() => {
        fetchWeather("Kolkata")
    }, [])
    return (
        <div className='min-w-screen w-[600px] flex flex-col p-4 py-6 bg-gradient-to-br from-blue-700 to-purple-700 rounded-lg shadow-xl'>
            <div className=''>
                <h1 className='text-white font-bold text-xl mb-4'>Weather Application</h1>
                {/* searchbar */}
                <Searchbar city={city} onSearch={handleSearch}/>
                {weatherData &&  (
                    <>
                     <div className='w-full flex items-center justify-center gap-3 mt-5'>
                    
 <p className='text-white font-bold text-2xl'>{Math.round(weatherData.temperature - 273.15)}°C

</p>
                <p className='text-white font-medium text-lg'>{weatherData.description}</p>
                </div>

 <h1 className='text-3xl text-white font-bold'>{weatherData.name}</h1>
  <div className='w-full flex items-center justify-center gap-4 mt-6'>
                    <div className='w-[300px] bg-purple-500 rounded-xl px-4 py-2'>
                        <p className='text-white font-bold text-xl'>{weatherData.humidity}%</p>
                        <p  className='text-white font-normal text-lg'>💨Humidity</p>
                    </div>
                     <div className='w-[300px] bg-purple-500 rounded-xl px-4 py-2'>
                        <p className='text-white font-bold text-xl'>{weatherData.windspeed}km/h</p>
                        <p  className='text-white font-normal text-lg'>🌬️Wind speed</p>
                    </div>
                </div>

    <div className='w-full flex items-center justify-center gap-4 mt-6'>
                    <div className='w-[300px] bg-purple-500 rounded-xl px-4 py-2'>
                        <p className='text-white font-bold text-xl'>{weatherData.visibility}</p>
                        <p  className='text-white font-normal text-lg'>💨Visibility</p>
                    </div>
                     <div className='w-[300px] bg-purple-500 rounded-xl px-4 py-2'>
                        <p className='text-white font-bold text-xl'>{weatherData.pressure}</p>
                        <p  className='text-white font-normal text-lg'>🌬️Air pressure</p>
                    </div>
                </div>
                </>
                )
               
                
                }
                
               
                

               
              
            


               
                <div>
                    
                </div>
            </div>

        </div>
    )
}










export default Weather
