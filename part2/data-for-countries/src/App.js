import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryInfo from './components/CountryInfo';

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [showCountry, setShowCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleShowCountryChange = (event) => {
    setShowCountry(event.target.value)
  }

  return (
    <div className="App">
      <h1>Search Countries</h1>
      <div className='search-countries'>
        Country Name:
        <input value={showCountry} onChange={handleShowCountryChange} />
      </div>
      <h2>Countries</h2>
      <CountryInfo countries={countries} showCountry={showCountry} />
    </div>
  );
}

export default App;
