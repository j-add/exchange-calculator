import './BalanceDisplay.css'

const BalanceDisplay = ({name}) => {
    let balance = 20000;

    function balanceMessage(balance) {
        let balanceClean = balance.toFixed(2);
        return balance < 0 ? `Uh oh, where'd all the money go? Balance is £${balanceClean}` : `${name}'s balance is £${balanceClean}`;
    }

    return (
        <div className="balanceContainer">
            <h1>{balanceMessage(balance)}</h1>
        </div>
    )

}

export default BalanceDisplay;