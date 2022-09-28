const CountryInfo = ({countries}) => {
  console.log(countries)
  return (
    <div className="country-info">
      <ul>
        {countries.map(country => 
          <li>{country.name.common}</li> 
        )}
      </ul>
    </div>
  )
}

export default CountryInfo