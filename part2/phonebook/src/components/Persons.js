const Persons = ({personsToShow}) => {
    return (
        <div className='persons'>
            <ul>
                {personsToShow.map(person => 
                    <li key={person.name}>
                    {person.name} {person.number}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Persons