const CountryInfo = ({ countries, showCountry}) => {

  const countriesToShow = countries.filter(country => country.name.common.includes(showCountry))
  
  return (
    <div className="country-info">
      <ul>
        {countriesToShow.map(country => 
          <li>{country.name.common}</li> 
        )}
      </ul>
    </div>
  )
}

export default CountryInfo