import React from 'react';


const Form = (props) => {
    const mappedNames = props.names.map(function({name}) {
        return <li>{name}</li>
    })

    return (
        <div>
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={props.newName.value} onChange={props.handleChange} />
            </label>
            <h1>You typed:
            { props.newName }
                <ol className="nameContainer">
                    {mappedNames}
                </ol>
            </h1>
            <button onClick={props.handleSubmit}>Submit</button>
        </form>
        </div>
    )
}


export default Form