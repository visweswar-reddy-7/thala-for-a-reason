import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setinputValue] = useState("");
  const [submitValue, setsubmitValue] = useState("")

  const handleChange = event => {
    setinputValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setsubmitValue(inputValue);
  }

  const calculate = (value) => {
    return value.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  };
  const dhoniGifurl = process.env.PUBLIC_URL + '/Thala-success.gif';
  const sorryGifurl = process.env.PUBLIC_URL + '/sorry.gif';
  

  return (
    <div className="App">
      <form onSubmit = {handleSubmit}>
        <label id="thala">Thala for a reason</label>
        <label id="valueEnter">Enter the value :
        <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type='submit' id='button'>Submit</button>
        {
          submitValue && (submitValue.length === 7 || calculate(submitValue) === 7) ?
          (<img id="dhoni" src={dhoniGifurl} alt="Dhoni" />) : submitValue && submitValue !== 0 ? (<img id="sorry" src={sorryGifurl} alt="Dhoni" />) : null
        }
      </form>
    </div>
  );
}

export default App;
