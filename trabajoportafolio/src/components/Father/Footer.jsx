import React from 'react';
import '../../styles/main-styles/Footer.css';
import github from '../../sources/github.png';
import instagram from '../../sources/instagram.jpg';  
import linkedin from '../../sources/linkedin.png';

const Footer = () => {
  return (
    <div className='footer'>
      <h2 className='titulo-footer'>CONTACTO</h2>
      <div className="button-container">
        <button onClick={() => window.open("https://www.instagram.com/titoroblesss", "_blank")}>
          <img src={instagram} alt="Instagram" className="icon" />
        </button>
        <button onClick={() => window.open("https://github.com/T1T0R", "_blank")}>
          <img src={github} alt="GitHub" className="icon" />
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/thiago-robles-33a43631a/", "_blank")}>
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
