import React, { useState, useEffect } from 'react';
import ThemeContext from '../src/ThemeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/main.scss';
import { Global } from '@emotion/react';

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState({});
  useEffect(() => {
    fetch('/theme.json')
      .then((response) => response.json())
      .then((data) => setTheme(data))
      .catch((error) => {
        console.error(error);
        setTheme({});
      });
  }, []);

  const [appContainerHeight, setAppContainerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const isHorizontal = windowWidth > windowHeight;

      if (isHorizontal) {
        setAppContainerHeight('auto');
      } else {
        setAppContainerHeight(windowHeight);
      }
    };

    // Initial height calculation
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!theme || Object.keys(theme).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container" style={{ height: appContainerHeight, fontFamily: theme.primaryFont }}>
      <ThemeContext.Provider value={theme}>
        <Global styles={{}} />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
