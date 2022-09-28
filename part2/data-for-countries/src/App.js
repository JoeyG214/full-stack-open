import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryInfo from './components/CountryInfo';

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }

  return (
    <div className="App">
      <h1>Search Countries</h1>
      <div className='search-countries'>
        Country Name:
        <input value={country} onChange={handleCountryChange} />
      </div>
      <h2>Countries</h2>
      <CountryInfo countries={countries} />
    </div>
  );
}

export default App;
