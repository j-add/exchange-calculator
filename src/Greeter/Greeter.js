import './Greeter.css';

const Greeter = ({name}) => {

    return (
        <div className="greeting">
            <h3>Hello {name}</h3>
        </div>
    )

}

export default Greeter;