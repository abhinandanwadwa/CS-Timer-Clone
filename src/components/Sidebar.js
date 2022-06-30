import React, { useEffect, useState } from 'react'
import Content from './Content'
import TimeItem from './TimeItem'
import { v4 as uuidv4 } from 'uuid';

const Sidebar = (props) => {


    

    const timesInitial = [];
    const [times, setTimes] = useState(timesInitial);


    



    // localStorage.setItem("id", "123");

    const getTimes = async () => {
        // API CALL

        const url = `https://cs-timer-clone.herokuapp.com/${localStorage.getItem("id")}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            // body: JSON.stringify({title, description, tag})   No need to give body because we are just fetching all the notes from the db and doing nothing else.
          });
            // const json = response.json();

        const json = await response.json();
        // console.log(json);

        setTimes(json);
        
      }


      useEffect(() => {
        if(!(localStorage.getItem('id'))){
            const newId = uuidv4();
            localStorage.setItem('id', newId);
        }
        getTimes();
      }, [])
      

    const updateAllTimes = () => {
        getTimes();    
    }






    // let counter = localStorage.getItem('counter');
    //     // times = JSON.parse(localStorage.getItem('time: '+counter));
    // let data = JSON.parse(window.localStorage.getItem("time: "+counter));

    // console.log(data);
    // console.log(counter);

    // var times = [];
    // for (i = 0; i < localStorage.length; i++) {
    //     x = localStorage.key(i);
    //     times.push(<strong key={i}>{localStorage.getItem('time')}</strong>)
    //     // document.getElementById("demo").innerHTML += x;
    // }

  return (
    <div>
        <div className="wrapper">
        <nav id="sidebar" style={{height: "800px"}}>
            {/* <div className="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div> */}

            <ul className="list-unstyled components">
                <p style={{fontSize: "37px"}}>Your Times</p>
                <hr style={{border: "4px solid black"}} />
                {/* <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li> */}
                
                {/* <TimeItem/> */}

                {times.map((time)=>{
                    return <TimeItem key={time._id} time = {time}/>;
                })}
                {/* <li>
                    <a href=""><small>Time 2 :</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>16.47</strong></a>
                </li>
                <hr />
                <li>
                    <a href=""><small>Time 3 :</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>17.32</strong></a>
                </li>
                <hr />
                <li>
                    <a href=""><small>Time 4 :</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>29.56</strong></a>
                </li>
                <hr />
                <li>
                    <a href=""><small>Time 5 :</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>23.44</strong></a>
                </li>
                <hr /> */}
                {/* <hr /> */}


                {/* <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li> */}


                {/* <li>
                    <a href="#">Portfolio</a>
                </li> */}
                {/* <li>
                    <a href="#">Contact</a>
                </li> */}
            </ul>

            {/* <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul> */}
        </nav>

        <Content changeScramble = {props.changeScramble} updateAllTimes = {updateAllTimes}/>
    </div>
    </div>
  )
}

export default Sidebar