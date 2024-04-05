import { useEffect, useState } from 'react'
import './App.css'
import Hilights from './components/Hilights'
import Temperature from './components/Temperature'

function App() {
  const [city, setCity] = useState("Kathmandu")
  const [weatherData, setWeatherData] = useState(null)

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=64a7c6301d884478a9b140657240404&q=${city}&aqi=no
  `
  useEffect(() => {
    fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new console.error("Error");
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setWeatherData(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [city])
  return (
    <div className="app">
      <div className="left">
        {weatherData && <Temperature
          setCity={setCity}
          stats={
            {
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime
            }
          }
        />}

      </div>
      <div className="right" >
        <h2 style={{ fontSize: "20px", gridColumn: "2 span" }}>Today's Hilights</h2>
        {
          weatherData &&
          <>
            <Hilights 
              stats={{
                title:"Wind Status",
                value:weatherData.current.wind_mph,
                unit:"mph",
                direction:weatherData.current.wind_dir
              }}
            />
            <Hilights 
              stats={{
                title:"Humidity",
                value:weatherData.current.humidity,
                unit:"%",
              }}
            />
            <Hilights 
              stats={{
                title:"Visibility",
                value:weatherData.current.vis_miles,
                unit:"miles",
              }}
            />
            <Hilights 
              stats={{
                title:"Air Pressure",
                value:weatherData.current.pressure_mb,
                unit:"mb",
              }}
            />
          </>
        }
      </div>
    </div>
  )
}

export default App

