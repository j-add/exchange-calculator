import './App.css';
import {useState} from "react";
import CheezburgerExchange from "./cheezburgerExchange/cheezburgerExchange";

function App() {
  const [userName, SetUserName] = useState('Cuthbert');

  return (
    <div className="App">
      <CheezburgerExchange />
    </div>
  );
}

export default App;
