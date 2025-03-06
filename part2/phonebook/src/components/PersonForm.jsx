const PersonForm = ({onSubmitAddName, handleNameChange, handlePhoneNumberChange}) => {
    return(
        <form onSubmit={onSubmitAddName}>
            <div>
            Name: <input onChange={handleNameChange}/>
            </div>
            <div>
            Number: <input onChange={handlePhoneNumberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm