import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import BalanceDisplay from "../BalanceDisplay/BalanceDisplay";

const Main = ({name}) => {

    return (
        <main>
            <WelcomeBanner name={name} />
            <BalanceDisplay name={name} />
        </main>
    )

}

export default Main;