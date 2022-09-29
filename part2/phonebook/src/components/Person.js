const Person = ({name, number, deletePerson, id}) => {
  return (
    <li>
      {name} {number}
      <button onClick={() => deletePerson(id)}>Delete</button>
    </li>
  )
}

export default Person