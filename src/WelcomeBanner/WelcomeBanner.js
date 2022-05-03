import './WelcomeBanner.css';

const WelcomeBanner = ({name}) => {

    return (
        <div className="welcomeBanner">
            <h1>Welcome to the Fighting Dragons Bank, {name}</h1>
            <img src="https://www.pngitem.com/pimgs/m/153-1531279_bank-building-icon-generic-monochrome-free-bank-logo.png" alt="Fighting Dragons Bank logo" className="welcomeLogo" />
        </div>
    )

}

export default WelcomeBanner;