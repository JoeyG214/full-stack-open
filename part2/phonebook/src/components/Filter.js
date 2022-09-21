const Filter = ({value, onChange}) => {
    return (
        <div className='filter'>
            Search Name: 
            <input 
            value={value}
            onChange={onChange}
            />
         </div>
    )
}

export default Filter