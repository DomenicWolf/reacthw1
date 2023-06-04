Person = ({name,age,hobbies}) => {
    let reply;
    if(age>18){
        reply = <h3>Please go vote!</h3>
    } 
    else {
        reply = <h3>Must be 18!</h3>
    }
    if(name.length > 8) {
        name = name.slice(0,6)
    }
    return (
        <div>
            <p> Learn some info about this person {name} is {age} yr</p>
            {reply}
            <ul>
                {hobbies.map(h => (
                    <li>{h}</li>
                ))}
            </ul>

        </div>
    )
}