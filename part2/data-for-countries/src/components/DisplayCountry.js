import { useEffect, useState } from "react"
import axios from "axios"

const DisplayCountry = ({selectedCountry}) => {

  const countryLanagues = Object.values(selectedCountry.languages)
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital[0]}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })
    }, [selectedCountry.capital])

  if (weather.length !== 0) {
    return (
      <div className="country">
        <h2>{selectedCountry.name.common}</h2>
        <p>Capital: {selectedCountry.capital}</p>
        <p>Area: {selectedCountry.area}</p>
        <p>Population: {selectedCountry.population}</p>
        <h3>Languages</h3>
        <ul>
          {countryLanagues.map(language => 
            <li key={language}>
              {language}
            </li>
          )}
        </ul>
        <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry}`} />
        <h2>Weather in {selectedCountry.name.common}</h2>
        <p>Temperature: {Math.round(weather.main.temp - 273)} <sup>o</sup> C</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='Weather Icon'/>
        <p>Wind Speed: {weather.wind.speed} km/h </p>
    </div>
    )
  }
}

export default DisplayCountry