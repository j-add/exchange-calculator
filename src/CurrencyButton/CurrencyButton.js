import './CurrencyButton.css'

const CurrencyButton = ({currency, changeRate, selected}) => {

return (
            <button autoFocus={selected} onClick={changeRate}>{currency}</button>
)

}

export default CurrencyButton;