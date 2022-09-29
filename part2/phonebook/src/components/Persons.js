import Person from "./Person"

const Persons = ({personsToShow, deletePerson}) => {
    return (
        <div className='persons'>
            <ul>
                {personsToShow.map(person => 
                    <Person 
                    key={person.id} 
                    id={person.id}
                    name={person.name} number={person.number} 
                    deletePerson={deletePerson}
                    />
                )}
            </ul>
        </div>
    )
}

export default Persons