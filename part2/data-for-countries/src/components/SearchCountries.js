const SearchCountries = ({ showCountry, handleShowCountryChange }) => {
  return (
    <div className="search-countries">
      Search Country:
      <input value={showCountry} onChange={handleShowCountryChange} />
    </div>
  )
}

export default SearchCountries