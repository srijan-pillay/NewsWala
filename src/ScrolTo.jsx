import React, {useState} from 'react';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <>
    <div style={{display:"flex",msFlexDirection:'row-reverse'}}>
	<button className = 'myBtn' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>TOP</button>
    </div>
    </>

);
}

export default ScrollButton;
