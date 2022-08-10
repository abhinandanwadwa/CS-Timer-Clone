import React from 'react'
import timerContext from '../context/TimerContext';
import { useContext, useState } from 'react'

const Content = (props) => {

const context = useContext(timerContext);
const {timer, setTimer} = context;




  // console.log(timer);
  // Add a Time
  const addNote = async () => {
    console.log("Adding a new Time");


    // API CALL

    const id = localStorage.getItem("id");
    const time = timer;

    const url = `https://cs-timer-backend.herokuapp.com/users`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, time})
      });
      // console.log(JSON.stringify({id, timer}))
        const json = response.json();
        console.log(json);
        
        props.updateAllTimes();





    // const note = {
    //     "_id": "62bbf4532a9h752baa4bc48144",
    //     "user": "62bb0d7c373004540bb580ab3",
    //     "title": title,
    //     "description": description,
    //     "tag": tag,
    //     "date": "2022-06-29T06:42:27.746Z",
    //     "__v": 0
    //   };
    // setNotes(notes.concat(note));
  }




const resetTime = () => {
  if(stateOfTimer !== 'working'){
    setTimer(parseFloat(0.00).toFixed(2));
    setStateOfTimer("idle");
  }
}


const [myInterval, setMyInterval] = useState(null)



var intv;




  const update = () => {
      intv = setInterval(() => {
      setMyInterval(intv)
      setTimer(prevtimer => (parseFloat(prevtimer)+0.01).toFixed(2));
    }, 10);

    
  }



  // document.addEventListener('keydown', event => {
  //   if (event.code === 'Space') {
  //     console.log('Space pressed'); //whatever you want to do when space is pressed
  //     document.body.onkeyup = function(e){
  //       if(e.keyCode == 32){
  //           console.log("Space Lifted")
  //       }
  //   }
  //   }
  // })


  const [stateOfTimer, setStateOfTimer] = useState("idle")


  document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        e.preventDefault();
        // console.log('pressed')
        if(stateOfTimer === 'working'){
          // console.log(myInterval);
          clearInterval(myInterval);
          setStateOfTimer('stopped');

          addNote();

          props.changeScramble();

          // var counter;
          // if(localStorage.getItem('counter') === null){
          //   counter = 1;
          // }
          // else{
          //   counter = localStorage.getItem('counter');
          //   counter++;
          // }

          // localStorage.setItem("time: "+counter, JSON.stringify({"time": timer}));
          // localStorage.setItem('counter', counter);
        }
        
    }
    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
          // console.log('lifted')
          if(stateOfTimer === 'idle'){
            update();
            setStateOfTimer('working');
          }
      }
  }
}
  
  
  return (
    <>
    <div id="content" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{color: "white", width: "48px", fontSize: "10rem", marginBottom: "300px"}}>{timer}</h1>

        <button onClick={resetTime} style={{width: '330px'}} className="btn btn-primary">Reset</button>
        </div>
    </div>
    </>
  )
}

export default Content