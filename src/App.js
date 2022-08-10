import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import TimerState from './context/TimerState';
import * as Scrambler from 'sr-scrambler'
import Sw from './components/Sw';

function App() {
  const [timer, setTimer] = useState(parseFloat(0.00).toFixed(2))


  const changeScramble = () => {
    setScramble(Scrambler.cube());
  }

  let cubeScramble = Scrambler.cube();
  const [scramble, setScramble] = useState(cubeScramble)


  // setTimeout(() => {
  //   setTimer(0.01)
  // }, 5000);

  // const updateTimer = () => {
  //   setInterval(() => {
  //     setTimer((parseFloat(timer) + 1).toFixed(2))
  //   }, 1000);
  // }

  return (
    <>
    <TimerState>

      {/* <Sw/> */}

    <Navbar scramble={scramble}/>
    <Sidebar changeScramble = {changeScramble}/>

    </TimerState>
    </>
  );
}

export default App;
