import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WeatherDisplay = ({ data, error }) => {
  const styles = {
    error: {
      color: '#3b82f6',
      textAlign: 'center',
      fontWeight: '600',
      padding: '1rem',
    },
    placeholder: {
      color: '#60a5fa',
      textAlign: 'center',
      fontStyle: 'italic',
      padding: '1rem',
    },
    weatherContainer: {
      backgroundColor: 'rgba(239, 246, 255, 0.95)',
      borderRadius: '0.75rem',
      boxShadow: '0 8px 16px rgba(59, 130, 246, 0.2)',
      padding: '2rem',
      textAlign: 'center',
      color: '#1e3a8a',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '450px',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1d4ed8',
      margin: 0,
    },
    img: {
      width: '90px',
      height: '90px',
      margin: '0 auto',
    },
    tempInfo: {
      fontSize: '1.1rem',
    },
    maxTemp: {
      fontWeight: '600',
      color: '#ef4444',
    },
    minTemp: {
      fontWeight: '600',
      color: '#2563eb',
    },
    feelsLike: {
      fontWeight: '600',
      color: '#facc15',
    },
    weatherDesc: {
      fontWeight: '600',
      color: '#10b981',
      textTransform: 'capitalize',
      fontSize: '1.1rem',
    },
  };

  return (
    <AnimatePresence mode="wait">
      {error ? (
        <motion.div
          key="error"
          style={styles.error}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Error fetching weather data. Please enter a valid city name.
        </motion.div>
      ) : !data ? (
        <motion.div
          key="placeholder"
          style={styles.placeholder}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Weather Data will appear here.
        </motion.div>
      ) : (
        <motion.div
          key="weather"
          style={styles.weatherContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 style={styles.heading}>
            Weather in {data.name}, {data.sys.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            style={styles.img}
            loading="lazy"
          />
          <p style={styles.tempInfo}>
            Maximum Temperature:{' '}
            <span style={styles.maxTemp}>
              {(data.main.temp_max - 273.15).toFixed(2)}°C
            </span>
          </p>
          <p style={styles.tempInfo}>
            Minimum Temperature:{' '}
            <span style={styles.minTemp}>
              {(data.main.temp_min - 273.15).toFixed(2)}°C
            </span>
          </p>
          <p style={styles.tempInfo}>
            Feels Like:{' '}
            <span style={styles.feelsLike}>
              {(data.main.feels_like - 273.15).toFixed(2)}°C
            </span>
          </p>
          <p style={styles.tempInfo}>
            Weather:{' '}
            <span style={styles.weatherDesc}>
              {data.weather[0].description}
            </span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WeatherDisplay;
