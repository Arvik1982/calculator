import { useState } from "react";
import { useEffect } from "react";
export function Input(
    {
    inputValue,
    setInputValue,
    outValue,
    setOutValue,
    newArr,
    clean,
    setClean, 
    inputValueCalc,
    setInputValueCalc, 
    })
    {
        
        let firstNumber=0;
        let secondNumber;
        let resultNumber;

function sumNumbers(){

let arr=[]

console.log(inputValueCalc)
console.log(inputValueCalc.join(''))
let sum = inputValueCalc. reduce ( function(a,b){return a+b})
console.log(sum)
   }     
 
return(
<div className="center">
    <div className='center__operators_line'>
    <button onClick={()=>{setClean(true)}} className='operators__line_item'>
    <h2 className='item__text'>C</h2>
    </button>
    <button className='operators__line_item'>
    <h2 className='item__text'>Bck</h2>
    
    </button>
    <button className='operators__line_item'>
    <h2 className='item__text'>%</h2>
    </button>
    <button className='operators__line_item'>
    <h2 className='item__text'>/</h2>
    </button>
    </div>
    <div className='numbers__grid'>
    <button  onClick={()=>{ setClean(false)
    
    setInputValue([...inputValue, 7]) 
    setInputValueCalc([...inputValueCalc, 7])

        }} className='operators__line_item'>
    <h2 className='item__text'>7</h2>
    </button>
    <button onClick={()=>{setClean(false)
        setInputValue([...inputValue, 8 ]) ;
        setInputValueCalc(8)
        }}  className='operators__line_item'>
    <h2  className='item__text'>8</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(9)
    setInputValue([...inputValue, 9])
    setInputValueCalc([...inputValueCalc, 9]) 
       }}  className='operators__line_item'>
    <h2   className='item__text'>9</h2>
    </button>
    <button className='operators__line_item'>
    <h2 className='item__text'>X</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(4)
    setInputValue([...inputValue, 4])
    setInputValueCalc([...inputValueCalc, 4])  
       }}  className='operators__line_item'>
    <h2  className='item__text'>4</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(5)
    setInputValue([ ...inputValue, 5])
    setInputValueCalc([...inputValueCalc, 5])
       }}  className='operators__line_item'>
    <h2 className='item__text'>5</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(6)
    setInputValue([...inputValue, 6]) 
    setInputValueCalc([...inputValueCalc, 6]) 
       }} className='operators__line_item'>
    <h2 className='item__text'>6</h2>
    </button>
    <button className='operators__line_item'>
    <h2 className='item__text'>-</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(1)
    setInputValue([...inputValue, 1])
    setInputValueCalc([...inputValueCalc, 1])  
      }}  className='operators__line_item'>
    <h2  className='item__text'>1</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(2)
    setInputValue([...inputValue,2]) 
    setInputValueCalc([...inputValueCalc, 2]) 
      }}  className='operators__line_item'>
    <h2  className='item__text'>2</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(3)
    setInputValue([...inputValue, 3]) 
    setInputValueCalc([...inputValueCalc, 3])
      }}  className='operators__line_item'>
    <h2  className='item__text'>3</h2>
    </button>
    <button
    onClick={
        ()=>{setInputValue([...inputValue,"+"])
        ;sumNumbers()}}                                //СУММА
    className='operators__line_item'>

    <h2 className='item__text'>+</h2>
    </button>
    <button onClick={()=>{setClean(false)
    // setNumber(0)
    setInputValueCalc([...inputValue, 0])
    setInputValue([...inputValueCalc, 0])  
      }}  className='operators__line_item'>
    <h2 className='item__text'>0</h2>
    </button>
    <button onClick={()=>{setClean(false)
    
        setInputValue([...inputValue,"."])
}} className='operators__line_item'>
    <h2  className='item__text'>,</h2>
    </button>
    <button className='operators__line_item result__button'>
    <h2 className='item__text '>=</h2>
    </button>
    <button className='operators__line_item result__button'>
    <h2  className='item__text '>TEST</h2>
    </button>
    </div>
    </div>

)
}