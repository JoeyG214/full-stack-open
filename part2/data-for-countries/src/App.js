import {useState, useEffect} from 'react'
import axios from 'axios';
import CountryInfo from './components/CountryInfo';
import SearchCountries from './components/SearchCountries';

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
      <SearchCountries showCountry={showCountry} handleShowCountryChange={handleShowCountryChange} />
      <h2>Countries</h2>
      <CountryInfo countries={countries} setCountries={setCountries} showCountry={showCountry} />
    </div>
  );
}

export default App;
