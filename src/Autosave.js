import React, { useEffect, useState } from 'react';
import { Navigate, renderMatches, useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import {render} from 'react-dom';
import { toast } from 'react-toastify';
import Alert from './Alert';
import data from './data'
export default function Autosave()
{

  

  const getLocalCode=()=>{
    let tempcode=localStorage.getItem('tempcode');
    console.log(tempcode)

    if(tempcode)
    {
      return JSON.parse(localStorage.getItem('tempcode'));
    }
  }
  const[code,setCode]=useState(getLocalCode())



  function handleSaveCode() {
    localStorage.setItem('tempcode',JSON.stringify(code) );
}
 
  useEffect(()=>{
    localStorage.setItem('tempcode',JSON.stringify(code));
  },[code])

  useEffect(() => {
    window.addEventListener('beforeunload', handleSaveCode);
    return () => {
        window.removeEventListener('beforeunload', handleSaveCode);
    }
}, [code]);
  

  console.log(code);


  return (

    
   
<div>
    {/* <button onClick={window['myTimer']}>Start</button>  */}
   <h1>Auto save</h1>
   <form>
   <textarea 
  value={code.code}
   onChange={(e)=>
   {
    setCode(
      {
    ...code,
    code: e.target.value} );
   }}

    

   spellcheck="false" placeholder="write your code here..."  required></textarea>
   <button >Save Code</button>
   </form>
  <h1>{code.code}</h1>
    </div>

   
    )
    
}
