import {useState} from "react";

const CoinToss = () => {

    const [coinResult, setCoinResult] = useState('')
    const [coinImg, setCoinImg] = useState('')

    const pics = {
        heads: 'https://upload.wikimedia.org/wikipedia/en/c/c0/British_12_sided_pound_coin.png',
        tails: 'https://upload.wikimedia.org/wikipedia/en/6/60/British_12_sided_pound_coin_reverse.png'
    }

    function handleClick() {
        Math.random() > 0.5 ? setCoinResult('heads') : setCoinResult('tails');
    }


    return (
        <>
                <h1>{coinResult}</h1><img src={pics[coinResult]} />
                <button onClick={handleClick}>Flip, flip, flip-a-coin</button>
        </>
    )
}

export default CoinToss;