import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Projects from './Projects';
import Education from './Education';

function show_Projects(){
  let p = <Projects/>;
  const main = ReactDOM.createRoot(document.getElementById('main'));
  main.render(p);

}
function show_education(){
  let p = <Education/>;
  const main = ReactDOM.createRoot(document.getElementById('main'));
  main.render(<Education/>);

}

function App() {
  return (
    <div id='Profile_bar'>
      <div id = 'switch-box'>
        <button className = 'btn' onClick = {show_Projects}>Projects</button>
        <button className = 'btn' onClick = {show_education}>Education</button>
        <button className = 'btn'>Experience</button>
      </div>
      <div id='left-box'>
        <img src='https://www.svgrepo.com/show/89129/profile-user.svg' width={100} height={100} className='profile-icon'></img>
       <div className='desc'>
       <span className='Name'>Zaid</span><br></br>
        <span className='Des'>Developer</span>
       </div>
      </div>
      <div id="right-box" >
        <span className = 'contact'>Zaidk@gmail.com</span>
        <span className = 'contact'>+91 9632723220</span>
      </div>
      <div id='main'>

      </div>
      
    </div>
  );
}

export default App;
