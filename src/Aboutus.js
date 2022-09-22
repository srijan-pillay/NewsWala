import React from 'react'
import './Aboutusstyle.css'

const Aboutus = () => {
  return (
    <div><div class="container">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/1.webp" alt=""/>
           </div>
           <div class="details">
             <div class="name">Name 1</div>
             <div class="job">Web Designer</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/1.webp" alt=""/>
           </div>
           <div class="details">
             <div class="name">Name 2</div>
             <div class="job">UI Designer</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/1.webp" alt=""/>
           </div>
           <div class="details">
             <div class="name">Name 3</div>
             <div class="job">Web Devloper</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/1.webp" alt=""/>
           </div>
           <div class="details">
             <div class="name">Name 4</div>
             <div class="job">Web Designer</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="images/1.webp" alt=""/>
           </div>
           <div class="details">
             <div class="name">Name 5</div>
             <div class="job">UI Designer</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
    
      </div>
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div></div>
  )
}

export default Aboutus
