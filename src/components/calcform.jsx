import style from'../style/style.css'
import { Output } from './output'
import { Input } from './inputblock'
export function CalcForm({inputValueCalc, setInputValueCalc, clean, setClean, inputValue, setInputValue,outValue, setOutValue, newArr, outValueArr,setOutValueArr}){
    return(
<div className="calculator">
<Output inputValueCalc={inputValueCalc} setInputValueCalc={setInputValueCalc} clean={clean} setClean={setClean}  outValueArr={outValueArr} setOutValueArr={setOutValueArr} newArr={newArr} inputValue={inputValue} setInputValue={setInputValue}outValue={outValue} setOutValue={setOutValue}/>
<Input inputValueCalc={inputValueCalc} setInputValueCalc={setInputValueCalc} clean={clean} setClean={setClean}  outValueArr={outValueArr} setOutValueArr={setOutValueArr} newArr={newArr} inputValue={inputValue} setInputValue={setInputValue}outValue={outValue} setOutValue={setOutValue}/>
<div className="bottom">
<h2>@tm</h2>
</div>
</div>
    )
}