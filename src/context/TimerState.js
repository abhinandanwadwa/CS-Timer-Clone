import TimerContext from "./TimerContext";
import { useState } from "react";

const TimerState = (props)=>{
    const [timer, setTimer] = useState(parseFloat(0.00).toFixed(2));

    // const updateTimer = () => {
    //     setTimer(timer+1);
    // }

    return (
        <TimerContext.Provider value = {{timer: timer, setTimer: setTimer}}>
            {props.children}
        </TimerContext.Provider>
    )
}

export default TimerState;