import './Goodbye.css'

const Goodbye = ({name}) => {

    return (
        <div className="soLonely">
            <p>Please don't leave {name}</p>
            <small>We will miss you</small>
        </div>
    )

}

export default Goodbye;