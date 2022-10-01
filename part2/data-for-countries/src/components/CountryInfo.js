import DisplayCountry from "./DisplayCountry"

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
            <li key={country.name.common}>
              {country.name.common}
            </li> 
          )}
        </ul>
      </div>
    )
  } 
  else if (countriesToShow.length === 1) {
    const selectedCountry = countriesToShow[0]
    return (
      <div className="country-info">
        <DisplayCountry selectedCountry={selectedCountry} />
      </div>
    )
  }
}

export default CountryInfo