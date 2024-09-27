import React from 'react';

const Header = () => {
  return (
    <header>
      <div className='imag'>
        <a href="#about">
          <img src="/logo.png" alt="Logo" />
        </a>
      </div>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', margin: 0, padding: 0 }}>
          <li className='head'><a href='https://github.com/Prabhjeet054'>GitHub</a></li>
          <li className='head'><a href="#about">About Me</a></li>
          <li className='head'><a href="#resume">Resume</a></li>
          <li className='head'><a href="#contact">Contact Me</a></li>
          <li><a href="https://www.linkedin.com/in/prabhjeet-singh-13130a287/">Linkedin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;