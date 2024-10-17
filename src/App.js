import './App.css';
import Paint from "./components/Paint";
import { useState } from "react";
import Clear from "./components/Clear";
import AddColor from "./components/AddColor";
import './components/Rgb.jsx'
import Rgb from "./components/Rgb";

function App() {
  const [array, setArray] = useState([
    {
      r: 150,
      g: 20,
      b: 20
    },
    {
      r: 20,
      g: 150,
      b: 20
    }
  ]);

  return (
      <div className="App">
        <div className='App-main'>
          <AddColor array={array} setArray={setArray}/>
          <Clear array={array} setArray={setArray}/>
        </div>
        <div className="App-main2">
          <Paint array={array} setArray={setArray} />
          <Rgb array={array} setArray={setArray} />
        </div>
      </div>
  );
}

export default App;
