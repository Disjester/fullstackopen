const Persons = ({persons, filter}) => {
    return (
    <div>
      {persons.filter(person => person.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1)
                                  .map(person => <div key={person.id}>{person.name} {person.number}</div>)}
    </div>
    )
}

export default Persons