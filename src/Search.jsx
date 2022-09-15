import React,{useRef} from 'react'
import { useGlobal } from "./Context";

const Search = () => {
    const{search} = useGlobal();
    const inputRef = useRef(null);

  

    const clickO = () =>{
        search(inputRef.current.value);
    }
  return (
    <>
        {/* <input type='text' className = 's' placeholder='enter topic'onKeyUp={(e)=>search(e.target.value)}/> */}
        <input type='text' className = 's' placeholder='enter topic' name='forsearch'  ref={inputRef}/>

        <button onClick={clickO}>search</button>
    </>
    );
}

export default Search