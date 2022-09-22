import React from 'react'
import AddToNote from './AddToNote';
import { useGlobal } from './Context';
import logo from './logo1.mp4'
import login from './smartphone.png'
import './style.css'




export default function Nav() {
    
    const {hits} = useGlobal();
    if(hits.length === 0){
      return;
    }

    let arr =[];

  let s = ' || ';
  for(let i = 0 ;i < 5;i++){
    arr.push(hits[i]);
    s = s + arr[i]?.title + ' || ';
  }

  function myFunction() {
    var x = document.getElementsByClassName("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  return (

    
    
      <div>

<div>
      <div className="topnav myTopnav">
      <a href="#"><video className='logo' src={logo} width="100" height="100" autoPlay muted loop></video></a>
  
  <a href="#home" className="active ">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href={"Aboutus.js"}>About</a>
  <div className='others'>
  <a href="#login"><img className='loginbutton' src={login}/></a>
  
  <AddToNote/>
  </div>

  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>


    </div>
        <div className='bulletin'>
     <marquee behavior="scroll" direction="left" scrollamount="12" style={{color:'white'}} >{s}</marquee> 
        </div>
      </div>
    );  
}
