import React, {useState} from 'react';

function Counter(){

    const [counter, setCounter] = useState(0)

    function handleAddCounter(){
        setCounter((preCounter)=>{
            return preCounter + 1
        })
    }

    function handleSubtractCounter(){
        setCounter((preCounter)=>{
            return preCounter - 1
        })
    }

    function handleClear(){
        setCounter(0)
    }

    return(
        <div>
            <h1>Counter</h1>
            <button onClick={handleSubtractCounter}>-</button>
            <input type="text" readOnly value={counter}/>
            <button onClick={handleAddCounter}>+</button>
            <br/>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}


export default Counter;
