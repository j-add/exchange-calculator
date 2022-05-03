import './Nav.css'
import Greeter from "../Greeter/Greeter";
import HelpText from "../HelpText/HelpText";

const Nav = ({name}) => {

    return (
        <nav>
            <Greeter name={name} />
            <HelpText name={name} />
        </nav>
    )

}

export default Nav;