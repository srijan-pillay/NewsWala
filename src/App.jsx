import React  from 'react'
import Nav from './Nav';
import Stories from './Stories';
import ScrollButton from './ScrolTo';
import AddToNote from './AddToNote';
import Search from './Search';
import Meme from "./Meme";
import './style.css'


// import { useGlobal } from './Context';  // custom hook


export default function () {
  
  return (
    <div>
        <Nav/> 
       <AddToNote/>
        <Search/>
        <Stories/>
        <ScrollButton/>

        {/* <Meme/> */}
        
    </div>
  );
}

