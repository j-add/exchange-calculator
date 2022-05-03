import CurrencyButton from "../CurrencyButton/CurrencyButton";
import {useEffect, useState} from "react";
import './cheezburgerExchange.css'

const CheezburgerExchange = () => {

    const [displayRate, setDisplayRate] = useState(0);
    const [rateGBP, setRateGBP] = useState(0)
    const [rateUSD, setRateUSD] = useState(0)
    const [rateEUR, setRateEUR] = useState(0)
    const [numBurgers, setNumBurgers] = useState(0)
    const [currencyUnit, setCurrencyUnit] = useState('£')
    const [burgerCost, setBurgerCost] = useState('6.10')

    const burgerGBP = 6.10;
    const [burgerUSD, setBurgerUSD] = useState(0);
    const [burgerEUR, setBurgerEUR] = useState(0);

    const fetchBitcoin = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(data => data.json())
            .then(data => {
                setRateGBP(data.bpi.GBP.rate_float.toFixed(2));
                setRateUSD(data.bpi.USD.rate_float.toFixed(2));
                setRateEUR(data.bpi.EUR.rate_float.toFixed(2));
            })
    }

    const fetchUSD = () => {
        fetch('https://api.exchangerate.host/convert?from=GBP&to=USD&amount=' + burgerCost)
            .then(data => data.json())
            .then (data => data.result)
            .then (data => setBurgerUSD(data))
    }

    const fetchEUR = () => {
        fetch('https://api.exchangerate.host/convert?from=GBP&to=EUR&amount=' + burgerCost)
            .then(data => data.json())
            .then (data => data.result)
            .then (data => setBurgerEUR(data))
    }

    useEffect(() => {
        fetchBitcoin();
        fetchEUR();
        fetchUSD();
    }, [])

    useEffect(() => {
        setDisplayRate(rateGBP)
    }, [rateGBP])

    useEffect(() => {
        if (displayRate === rateGBP) {
            setBurgerCost(burgerGBP.toFixed(2))
            setCurrencyUnit('£')
            setNumBurgers(displayRate / burgerGBP)
        } else if (displayRate === rateUSD) {
            setBurgerCost(burgerUSD.toFixed(2))
            setCurrencyUnit('$')
            setNumBurgers(displayRate / burgerUSD)
        } else if (displayRate === rateEUR) {
            setBurgerCost(burgerEUR.toFixed(2))
            setCurrencyUnit('€')
            setNumBurgers(displayRate / burgerEUR)
        }
    },[displayRate, burgerEUR, burgerGBP, burgerUSD, rateUSD, rateEUR, rateGBP])

    return (
        <main>
            <div className="calc">
                <h1>&#8383;1 = { currencyUnit + displayRate }</h1>
                <small>1 Cheeseburger = {currencyUnit + burgerCost}</small>
                <h2>I can haz {Math.floor(numBurgers)} cheezburger with &#8383;1</h2>
                <div>
                    <CurrencyButton currency='USD' changeRate={() => setDisplayRate(rateUSD)} />
                    <CurrencyButton currency='GBP' changeRate={() => setDisplayRate(rateGBP)} selected={true}/>
                    <CurrencyButton currency='EUR' changeRate={() => setDisplayRate(rateEUR)} />
                </div>
                <img src="/happycat.gif" alt="happy cat" className="mainImg" />
            </div>
        </main>
    )

}

export default CheezburgerExchange;