import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBox from './components/Searchbox';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCitySearch = async (cityName) => {
    const apiKey = "c918cae1b4fe7dbee538e92dc94b5f11";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setWeatherData(data);
      setError(false);
    } catch (err) {
      setWeatherData(null);
      setError(true);
    }
  };

  const styles = {
    appContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#1f2937',
      backgroundColor: '#e0e7ff',
      width: '100%',
      boxSizing: 'border-box',
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      maxWidth: '100%',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      display: 'flex',
      flexWrap: isDesktop ? 'nowrap' : 'wrap',
      flexDirection: isDesktop ? 'row' : 'column',
      gap: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '1.25rem',
      boxShadow: '0 20px 40px rgba(63, 81, 181, 0.2)',
      padding: '3rem 2rem',
      width: isDesktop ? '90%' : '95%',
      maxWidth: '1200px',
      minHeight: '400px',
      alignItems: 'stretch',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },
    searchBoxContainer: {
      flex: isDesktop ? '1' : '1 1 100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: isDesktop ? '2px solid #c7d2fe' : 'none',
      paddingRight: isDesktop ? '2rem' : '0',
      paddingBottom: isDesktop ? '0' : '2rem',
      borderBottom: isDesktop ? 'none' : '2px solid #c7d2fe',
      minWidth: '280px',
      boxSizing: 'border-box',
    },
    weatherDisplayContainer: {
      flex: isDesktop ? '2' : '1 1 100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: isDesktop ? '2rem' : '0',
      paddingTop: isDesktop ? '0' : '2rem',
      minWidth: '320px',
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <main style={styles.main}>
        <div style={styles.contentWrapper}>
          <div style={styles.searchBoxContainer}>
            <SearchBox onSearch={handleCitySearch} />
          </div>
          <div style={styles.weatherDisplayContainer}>
            <WeatherDisplay data={weatherData} error={error} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
