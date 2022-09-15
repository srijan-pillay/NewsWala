import React from 'react'
import { useGlobal } from './Context';



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
  
  return (
    
      <div>
        
    {/* <marquee behavior="scroll" direction="left" scrollamount="12" style={{color : 'wheat'}} >{s}</marquee> */}
  
      </div>
    );  
}
