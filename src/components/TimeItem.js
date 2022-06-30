import React from 'react'

const TimeItem = (props) => {
  // console.log(props.time.id);
  return (
    <div style={{margin: "auto", textAlign: "center"}}>
        <li>
            <a href=""><small>{props.time.time}</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        </li>
        <hr />
    </div>

  )
}

export default TimeItem