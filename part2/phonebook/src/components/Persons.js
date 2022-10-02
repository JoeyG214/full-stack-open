import Person from "./Person"

const Persons = ({personsToShow, deletePerson}) => {
    return (
        <div className='persons'>
            <ul>
                {personsToShow.map(person => 
                    <Person 
                    key={person.id} 
                    name={person.name} number={person.number} 
                    deletePerson={() => deletePerson(person.id)}
                    />
                )}
            </ul>
        </div>
    )
}

export default Persons