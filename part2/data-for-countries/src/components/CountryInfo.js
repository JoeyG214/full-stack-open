const CountryInfo = ({ countries, showCountry}) => {

  const countriesToShow = countries.filter(country => country.name.common.includes(showCountry))
  
  if (countriesToShow.length > 10) {
    return (
      <div className="country-info">
        <p>Too many matches, narrow down your search</p>
      </div>
    )
  } 
  else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
    return (
      <div className="country-info">
        <ul>
          {countriesToShow.map(country => 
            <li key={country.area}>
              {country.name.common}
            </li> 
          )}
        </ul>
      </div>
    )
  } 
  else if (countriesToShow.length === 1) {

    const selectedCountry = countriesToShow[0]
    const countryLanagues = Object.values(selectedCountry.languages)
    
    return (
      <div className="country-info">
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
        </div>
      </div>
    )
  }
}

export default CountryInfo