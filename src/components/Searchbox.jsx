import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label htmlFor="city" style={labelStyle}>
        Enter City
      </label>
      <input
        id="city"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="e.g. Bengaluru"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Get Weather
      </button>
    </form>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
  boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: '#4f46e5',
};

const inputStyle = {
  width: '100%',
  border: '1px solid #a5b4fc',
  borderRadius: '0.5rem',
  padding: '0.75rem',
  marginBottom: '1rem',
  outline: 'none',
  transition: 'box-shadow 0.3s ease',
  fontSize: '1rem',
  boxSizing: 'border-box',
};

const buttonStyle = {
  backgroundColor: '#4f46e5',
  color: 'white',
  borderRadius: '0.5rem',
  padding: '0.75rem 1.5rem',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
  boxSizing: 'border-box',
};

export default SearchBox;
