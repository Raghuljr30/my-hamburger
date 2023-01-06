import React, { useEffect, useState } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import { toast } from 'react-toastify';
import Alert from './Alert';
export default function Home()
{
//   const[count,setCount]= useState(0);
 
  const navigate=useNavigate();
  
 
  console.log(render)

  return (

    
   
<div>
    {/* <button onClick={window['myTimer']}>Start</button>  */}
    <button onClick={()=>{navigate(`/compile`)}}>Start</button>{' '} 

    </div>

   
    )
    
}
