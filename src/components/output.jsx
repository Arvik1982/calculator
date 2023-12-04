export function Output ({outValue, setOutValue, inputValue, clean, setClean,}){
   
    let newArr=[]
    let outValueArr=[...newArr,inputValue]
    let resultValue;





    if(clean){
        resultValue=0
        inputValue.splice(0,inputValue.length)
    } else
    { resultValue=outValueArr[0].join('')}

    return(

    <div className="top">
<input readOnly value={resultValue} className='calculator__results' placeholder='results' type='text'></input>
</div>
    )
}