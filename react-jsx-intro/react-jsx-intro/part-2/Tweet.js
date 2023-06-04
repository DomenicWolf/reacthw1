Tweet = ({username,name,date,message}) => {
    return (
        <div>
            <ul>
                <li>{username}</li>
                <li>{name}</li>
                <li>{date}</li>
                <li>{message}</li>
            </ul>
        </div>
    )
}