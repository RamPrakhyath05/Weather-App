import React from 'react';

const Header = () => (
  <header style={headerStyle}>
    <h1 style={titleStyle}>Weather Today</h1>
  </header>
);

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(to right, #4f46e5, #3b82f6)', 
  color: 'white',
  padding: '1.5rem',
  borderBottomLeftRadius: '0.5rem',
  borderBottomRightRadius: '0.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  width: '100%', 
  margin: '0 auto',
  boxSizing: 'border-box',
};

const titleStyle = {
  fontSize: '2.25rem', 
  fontWeight: '800', 
  margin: 0,
};

export default Header;
