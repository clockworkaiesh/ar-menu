import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'
import ThemeContext from '../../src/ThemeContext'

const MenuItem = ({ thumbnail, name, price }) => {
  const appTheme = useContext(ThemeContext)

  return (
    <Zoom>
      <Link href="/details">
        <div className="menu-item">
          <div className="thumbnail">
            <Image
              src={thumbnail}
              alt="item thumbnail"
              width="70px"
              height="70px"
            />
          </div>
          <h4 style={{ color: appTheme.secondary }}>{name}</h4>
          <p className="price" style={{ color: appTheme.primary }}>
            $<span style={{ color: appTheme.secondary }}>{price}</span>
          </p>
        </div>
      </Link>
    </Zoom>
  )
}

export default MenuItem
