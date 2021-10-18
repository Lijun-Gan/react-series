import React, {useState,useEffect} from "react";

export default function Clock(){
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const[ctime, setCtime] = useState(time);

    const[timerOn, setTimeOn] = useState(false);
    const[stopWatchTime, setStopWatchTime] = useState(0)

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }

    useEffect(()=>{
        const interval = setInterval(UpdateTime, 1000)
        return ()=> clearInterval(interval)
    },[]);

    const UpdateStopWatch = () => {
        setStopWatchTime(prevTime => prevTime + 10)
    }

    useEffect(()=>{
        let stopWatchInterval 
        if(timerOn){
            stopWatchInterval = setInterval(UpdateStopWatch, 10)
        }else{
            clearInterval(stopWatchInterval)
        }
        return () => clearInterval(stopWatchInterval)
    },[timerOn])

    
    return(
        <div>
            <h1> Clock </h1>
            <h1>Time: {ctime}</h1>
            <h1>Date: {date}</h1>
            <br/>
            <h1>Stopwatch</h1>
            <div>
                <h2>[ {stopWatchTime} ]</h2>
                <div>
                    <button onClick={()=> setTimeOn(true)}>Start</button>
                    <button onClick={()=> setTimeOn(false)}>Stop</button>
                    <button onClick={()=> setTimeOn(true)}>Resume</button>
                    <button onClick={()=> setStopWatchTime(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}