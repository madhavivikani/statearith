import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import One_fun from './One_fun';
import 'bootstrap/dist/css/bootstrap.min.css';


// print krvu hoy to pelo change krvu hoy to bijo variable
function App() {

  let [val, setval] = useState("")
  let [val1, setval1] = useState("")
  let [ans, setans] = useState("")


  const btnsum = (n) => {
    if (n == 1) {
      setans(parseInt(val) + parseInt(val1))
    }
    if(n==2){
      setans(parseInt(val) - parseInt(val1))
    }
    if(n==3){
      setans(parseInt(val) * parseInt(val1))
    }
    if(n==4){
      setans(parseInt(val) / parseInt(val1))
    }
  }


  return (
    <div className="App">
      <p className='title'>SIMPLE CALCULATOR</p>
        VALUE:1<input type='text' onChange={(e) => { setval(e.target.value) }}></input><br></br>
      VALUE:2<input type='text' onChange={(e) => { setval1(e.target.value) }}></input><br></br>

      <div className='btn'>
        <input type='button' className='btn1' value={"SUM"} onClick={() => btnsum(1)} ></input>
        <input type='button' className='btn1' value={"SUB"} onClick={() => btnsum(2)}></input>
        <input type='button' className='btn1' value={"MUL"} onClick={() => btnsum(3)}></input>
        <input type='button' className='btn1' value={"DIV"} onClick={() => btnsum(4)}></input>
      </div><br></br>

      <input type='text' className='ans_p' value={ans}></input><br></br>
{/* =============================================== */}
      {/* <One_fun/> */}

    </div>
  );
}

export default App;
