import logo from './logo.svg';
import { CalcForm } from './components/calcform';
import './App.css';
import {useEffect} from'react'
import { useState } from 'react';


function App() {
const[clean, setClean]=useState('')
const[inputValue, setInputValue]=useState([])
const[inputValueCalc, setInputValueCalc]=useState([]) 
const[outValue,setOutValue]=useState('')
let newArr= [];
const [outValueArr, setOutValueArr]=useState([])

useEffect(()=>{console.log('hallo')},[])


  return (
    <div   className="App">
      <CalcForm inputValueCalc={inputValueCalc} setInputValueCalc={setInputValueCalc}  clean={clean} setClean={setClean} outValueArr={outValueArr} setOutValueArr={setOutValueArr} newArr={newArr} inputValue={inputValue} setInputValue={setInputValue} outValue={outValue} setOutValue={setOutValue}/>
    </div>
  );
}

export default App;
