/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import menuIcon from '../../public/images/icons/hamburger.png'
import { FaHome } from 'react-icons/fa'
import brandLogo from '../../public/images/coffee-logo.png'
import hashpyLogo from '../../public/images/brand/logo-black.png'
import { IoMdRestaurant, IoMdHome } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'
import ThemeContext from '../../src/ThemeContext'
//
function AppHeader() {
  // THEMING
  const appTheme = useContext(ThemeContext)
  const menuLink = css({
    color: appTheme.text,
    ':hover': {
      color: appTheme.primary,
    },
  })
  // SIDEBAR OPEN/CLOSE STATE
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // SIDEBAR OPEN/CLOSE HANDLERS
  const handleSidebarOpen = () => setIsSidebarOpen(true)
  const handleSidebarClose = () => setIsSidebarOpen(false)

  return (
    <>
      <div className="app-header">
        <button className="open-btn" onClick={handleSidebarOpen}>
          <Image src={menuIcon} alt="openMenu" width="22px" height="22px"/>
        </button>
        <button className="home-link" style={{ color: appTheme.primary }}>
          <Link href="/">
            <a>
              <FaHome />
            </a>
          </Link>
        </button>
      </div>

      {/* ADD "open" CLASS TO APPSIDEBAR WHEN "isSidebarOpen" IS TRUE */}
      <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div className="top-row">
          <div className="sidebar-brand-logo">
                <Image src={brandLogo} alt="brand logo" />
          </div>

          <div className="menu-items-list">
            <Link href="/">
              <a css={menuLink}>
                <IoMdHome style={{ fontSize: '28px' }} />
                Home
              </a>
            </Link>
            <Link href="/">
              <a css={menuLink}>
                <IoMdRestaurant style={{ fontSize: '28px' }} />
                Menu
              </a>
            </Link>
          </div>
          {/* CLOSE BUTTON */}
          <button className="close-btn" onClick={handleSidebarClose}>
            <RxCross1 />
          </button>
        </div>
        <div className="sidebar-footer">
          <div className="powered-by">
            <Image src={hashpyLogo} alt="hashpy" width="20px" height="20px" />
            Powered by Hashpy
          </div>
        </div>
      </div>
    </>
  )
}

export default AppHeader
