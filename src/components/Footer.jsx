import React from 'react';

const Footer = () => (
  <footer style={footerStyle}>
    <p style={textStyle}>Powered by OpenWeather API</p>
  </footer>
);

const footerStyle = {
  marginTop: '2.5rem',
  textAlign: 'center',
  color: '#718096',
  width: '100%', 
  padding: '1rem 0',
  boxSizing: 'border-box',
};

const textStyle = {
  fontSize: '0.75rem',
  margin: 0, 
};

export default Footer;
