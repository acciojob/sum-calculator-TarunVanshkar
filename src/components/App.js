
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const [sum, setSum] = useState(0);
  return (
    <div id="calculator-container">
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(event) => {setSum(sum+ parseInt(event.target.value))}}></input>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
