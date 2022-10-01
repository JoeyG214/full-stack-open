const DisplayCountry = ({selectedCountry}) => {

  const countryLanagues = Object.values(selectedCountry.languages)
  
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
  </div>
  )
}

export default DisplayCountry