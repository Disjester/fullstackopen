const Persons = ({persons, filter, onSubmitRemove}) => {
    return (
    <div>
      {persons.filter(person => person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1)
                                  .map(person => <div key={person.id}>{person.name} {person.number} <button id={person.id} onClick={onSubmitRemove}>Remove</button></div>)}
    </div>
    )
}

export default Persons