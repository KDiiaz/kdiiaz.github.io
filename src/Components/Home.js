//import logo from 'IMG_2526.jpg';
import React from 'react';
import logo from './JuanDiaz.jpg';
 
console.log(logo);
 
const Home = () => {
   return(
       <div className="App">
     <header className="App-header">
       <p>
       </p> My name is Juan Diaz and this is my porfolio.
       <img src={logo} alt="Logo" />
 
       <a
         className="App-link"
         href="https://github.com/kdiiaz"
         target="_blank"
         rel="noopener noreferrer"
       >
         Github
       </a>
     </header>
   </div>
   );
}

export default Home

