const PersonForm = ({onSubmit, valueName, onChangeName, valueNumber, onChangeNumber}) => {
    return (
        <div className='person-form'>
            <form onSubmit={onSubmit}>
                <div>
                    Name: 
                    <input 
                    value={valueName} 
                    onChange={onChangeName} 
                    />
                </div>
                <div>
                    Number:
                    <input 
                    value={valueNumber}
                    onChange={onChangeNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm