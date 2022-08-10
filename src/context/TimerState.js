<<<<<<< HEAD
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

=======
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

>>>>>>> e9d56484aa343a028f98211c2d4dfc334710d589
export default TimerState;