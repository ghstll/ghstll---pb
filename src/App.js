import React from "react";
import './App.css';
function App() {
  return (
    <>
     
     <header>
        <div className='site-brand'>
          <h1 id='brand'>Ghstll - Personal Blog</h1>
        </div>
        <nav className='main-nav'>
          <ul className='nav-sections' style={{listStyleType : 'none'}}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>Categories</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
     
  );
}

export default App;
