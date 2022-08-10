import React, { useState } from 'react'


const Sw = () => {
  // new Stopwatch([countDownMS], [options]);
  // var stopwatch = new Stopwatch();
  // stopwatch.start();
  // console.log(stopwatch);
  // setTimeout(() => {
  //   console.log(stopwatch)
  // }, 2000);



  // let sw = new Stopwatch();

  // sw.start();
  // setTimeout(() => {
  //   console.log(sw)
  //   sw.lap();
  // }, 2000);

  let x = 0

  const updateTimer = ()=>{
    
    setInterval(() => {
      x = (parseFloat(x)+0.01).toFixed(2)
      console.log(x)
      console.log(toString(x)[toString(x).length - 2] + toString(x)[toString(x).length - 1])
      if(toString(x)[toString(x).length - 2] + toString(x)[toString(x).length - 1] === "0.60"){
      x = (parseFloat(1.00)).toFixed(2)
      }
    }, 100);
  }


  

  const [timersex, setTimersex] = useState(0.00)

  return (
    <div>
      <button onClick={updateTimer}>Hi</button>
    </div>
  )
}

export default Sw