import './App.css';
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CoinToss from "./CoinToss/CoinToss";
import {useState} from "react";
import CheezburgerExchange from "./cheezburgerExchange/cheezburgerExchange";

function App() {
  const [userName, SetUserName] = useState('Cuthbert');

  return (
    <div className="App">
        {/*<CoinToss />*/}
        {/*<Nav name={userName} />*/}
        {/*<Main name={userName} />*/}
        {/*<Footer name={userName} />*/}
      <CheezburgerExchange />
    </div>
  );
}

export default App;
