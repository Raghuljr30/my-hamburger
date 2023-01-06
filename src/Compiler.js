import React, { useEffect, useState } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import { toast } from 'react-toastify';
import Alert from './Alert';
export default function Compiler()
{
  const[count,setCount]= useState(0);
 
  const navigate=useNavigate();
 
  // if(count==1)
  // {
  //   navigate("/");
  // }

  

  useEffect(()=>{
    
    
   window.myTimer();
   
   
  },  [] )
    // document.addEventListener("visibilitychange",function(){
    //   document.title=document.visibilityState;
    //   console.log(document.visibilityState);
      
       
    // })
    
  // useEffect(()=>{
    
     
  //  window['myTimer']
  //   })
  // //  setCount(count+1);
  
  // // increment();
  // // window['mychange']
   
   
  // },document.visibilityState)
 
  // const increment=()=>{
  //   setCount(count+1);
  // }
  // console.log(render);

  // componentWillMount() {


  //   window.myTimer();
  // }
  

  return (

    
    
    <div  class="mobile-container">

    
      
    <div class="mobile-container">
    <h1>Countdown Clock</h1>
<div id="clockdiv">
  <div>
    <span className="days" id="day"></span>
    <div className="smalltext">Days</div>
  </div>
  <div>
    <span className="hours" id="hour"></span>
    <div className="smalltext">Hours</div>
  </div>
  <div>
    <span className="minutes" id="minute"></span>
    <div className="smalltext">Minutes</div>
  </div>
  <div>
    <span className="seconds" id="second"></span>
    <div className="smalltext">Seconds</div>
  </div>
</div>
  
<p id="demo"></p>

    

    {/* <button onClick={window['myTimer']}>Start</button>  */}
    <button onClick={()=>{navigate(`/compile`)}}>Start</button>{' '} 

    </div>

   

  
</div>





   
    )
    
}
