import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Temprature from './Components/Temprature'

function App() {
  const [city, setCity] = useState("Kathmandu");
  const [weather, setWeather] = useState(null);
  const [loc, setLoc] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=64a7c6301d884478a9b140657240404&q=${city}&aqi=no`

  useEffect(() => {
    const fetchData = () => {
      fetch(apiURL)
      .then(response => {
        if (!response.ok) {
          throw new console.error("Error");
        }
        return response.json();
      })
      .then(data => {
        setLoc(data.location.name)
        setWeather(data);
      })
      .catch(e => {
        console.log(e)
      })
    }
   fetchData();
  }, [city])



  return (
    <div className='app contariner'>
      <div className="left">
        {
          weather && <Temprature setCity={setCity}
            stats={{
              temp: weather.current.temp_c,
              condition: weather.current.condition.text,
              isDay: weather.current.is_day,
              location: weather.location.name,
              time: weather.location.localtime
            }}
          />
        }
      </div>
      <div className="right">
        <p style={{ gridColumn: 'span 2' }}>Today's hilights for {loc}</p>
        {
          weather &&
          <>
            <Card 
              stats={{
                title:"Wind Status",
                value:weather.current.wind_mph,
                unit:"mph",
                direction:weather.current.wind_dir
              }}
            />
            <Card 
              stats={{
                title:"Humidity",
                value:weather.current.humidity,
                unit:"%",
              }}
            />
            <Card 
              stats={{
                title:"Visibility",
                value:weather.current.vis_miles,
                unit:"miles",
              }}
            />
            <Card 
              stats={{
                title:"Air Pressure",
                value:weather.current.pressure_mb,
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
