import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import './Weather.css'

export default function Weather() {
  const [query, setQuery]=useState('');
  const [weather, setWeather]=useState('');
  const search = async(event)=>{
    event.preventDefault()
    const city=event.target.elements.query.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'5166e4f3707497c4c34169882a430268'}`;
    const req = axios.get(url);
    const response= await req;
    setWeather({
            temp: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
    })
    setQuery(response.data.main)
  }
  //converting kelvin to celcius 
  let k=weather.temp;
  let c=k-273
  const Info = () =>{
    return  <div className='Response'>
     <div>Wind Speed:{weather.wind} m/s</div>
     <div>Temperature:{c.toFixed(2)} &#8451;</div>
     <div>Humidity:{weather.humidity} %</div>
      </div>
  }
  return (
    
    <div align='center' className='body'>
      <h1>Know your Weather</h1>
      <hr></hr>
      <div>
        <form onSubmit={search}>
          <input  placeholder='Type your city here...' name='query'></input>
          <button >Search</button>
          </form>
          {weather && <Info/>}
      </div>
    </div>
    
  )
}