import React, { useState, useEffect } from 'react'
import ThemeContext from '../src/ThemeContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/main.scss'
import { Global } from '@emotion/react'

function App({ Component, pageProps }) {
  // const appTheme = useContext(ThemeContext)

  const [theme, setTheme] = useState({})
  useEffect(() => {
    fetch('/theme.json')
      .then((response) => response.json())
      .then((data) => setTheme(data))
      .catch((error) => {
        console.error(error)
        setTheme({}) // Set a default value in case of error
      })
  }, [])

  if (!theme || Object.keys(theme).length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="app-container" style={{ fontFamily: theme.primaryFont }}>
      <ThemeContext.Provider value={theme}>
        <Global
          styles={
            {
              // Add global styles here
            }
          }
        />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
