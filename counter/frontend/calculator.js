import React, {useState, useEffect} from "react";

export default function Calculator(){

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [operator, setOperator] = useState("")
    const [result, setResult] = useState("")

    useEffect(()=>{
        if(num1 && num2 && operator){
            const n1 = parseInt(num1)
            const n2 = parseInt(num2)
            if(operator == "+") setResult(n1 + n2)
            if(operator == "-") setResult(n1 - n2)
            if(operator == "÷") setResult(n1 / n2)
            if(operator == "*") setResult(n1 * n2)
        }
    },[operator, num1, num2])


    function handleNum1(e){
        setNum1(e.target.value)
        // console.log(e.target.value)
    }

    function handleNum2(e){
        setNum2(e.target.value)
        // console.log(e.target.value)
    }

    function handleOperator(e){
        setOperator(e.target.innerHTML)
        // console.log(e.target.innerHTML)
    }

    function handleClear(){
        setNum1("")
        setNum2("")
        setOperator("")
        setResult("")
    }

    return(
        <div>
            <h1> Calculator </h1>
            <div>
                <input onChange={handleNum1} type="text" value={num1}/>
                <input className="operator" type="type"  readOnly value={operator} />
                <input onChange={handleNum2} type="text" value={num2}/>
                <span>=</span>
                <input type="text" readOnly value={result}/>
                <br/>
                <button onClick={handleOperator} >+</button>
                <button onClick={handleOperator}>-</button>
                <button onClick={handleOperator}>*</button>
                <button onClick={handleOperator}>÷</button>
                
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}