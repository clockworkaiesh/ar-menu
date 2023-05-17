/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useContext, useEffect } from 'react'
import ThemeContext from '../src/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import hashpyLogo from '../public/images/brand/transparent-white.png'
import brandLogo from '../public/images/coffee-logo.png'

export default function Home() {
  // SCREEN HEIGHT
  // THEMING
  const appTheme = useContext(ThemeContext)
  // const menuButton = css({
  //   backgroundColor: appTheme.primary,
  //   color: '#fff',
  //   transition: 'filter 0.2s ease',
  //   ':hover': {
  //     filter: 'hue-rotate(-10deg)',
  //   },
  // })

  // const menuButton = css({
  //   backgroundColor: appTheme.primary,
  //   color: '#fff',
  //   transition: 'filter 0.3s',
  //   filter: 'brightness(100%)',
  //   ':hover': {
  //     filter: 'hue-rotate(0deg) saturate(150%) contrast(0.8)',
  //   },
  // })
  const menuButton = css({
    backgroundColor: appTheme.primary,
    color: '#fff',
    ':hover': {
      filter: 'hue-rotate(3deg)',
    },
  })
  const [startClass, setStartClass] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStartClass(false)
    }, 1900)
  }, [])
  const toggleSwitch = css({
    backgroundColor: appTheme.primary,
  })
  const toggleSwitchColor = css({
    '&:before': toggleSwitch,
  })
  return (
    // <div className={`landing-page${startClass ? ' start' : ''}`}>
    <div className='landing-page'>
      <div className="logo-block">
        <div className="brand-logo">
          <Image src={brandLogo} alt="brand logo" />
        </div>
      </div>

      <div className="content-block">
        <div className="intro-text">
          <h2>Welcome to ARMenu</h2>
          <p>Your favourite foods delivered fast at your door</p>
        </div>

        <div className="copyright">
            <Link href="/categories">
              <button className="btn btn-solid" css={menuButton}>open menu</button>
            </Link>
          <label className="toggle">
            <span className="toggle-label">English </span>
            <input className="toggle-checkbox" type="checkbox" />
            <div className="toggle-switch" css={toggleSwitchColor}></div>
            <span className="toggle-label">Arabic</span>
          </label>

          <div className="powered-by">
            
            Powered by <div className='powered-logo'>   <Image src={hashpyLogo} alt="hashpy" />
          </div></div>
        </div>
      </div>
    </div>
  )
}
