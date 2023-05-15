import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
// ingredients icons
import chicken from '../../public/images/icons/chicken.png'
import egg from '../../public/images/icons/egg.png'
import bacon from '../../public/images/icons/bacon.png'
import lemon from '../../public/images/icons/lemon.png'
import onion from '../../public/images/icons/onion.png'
// food warning icons
import nuts from '../../public/images/icons/nut.png'
import dairy from '../../public/images/icons/dairy.png'
import gluten from '../../public/images/icons/gluten.png'
// react icons
import { FaStar } from 'react-icons/fa'

// Context setup
import ThemeContext from '../../src/ThemeContext'
function MenuDetailsAnimatedCard() {
  const appTheme = useContext(ThemeContext)

  const menuDetailsCardRef = useRef(null)
  useEffect(() => {
    menuDetailsCardRef.current.classList.add('up')
  }, [])
  return (
    <div className="menu-details-card" ref={menuDetailsCardRef}>
      <div className="scrollable-area">
        {/* rating */}
        <h4 className="rating">
          <FaStar style={{ color: appTheme.primary, fontSize: '20px' }} />
          4.6
        </h4>

        <div className="details-content">
          <div className="name-price">
            <h3 className="item-title" style={{ color: appTheme.secondary }}>
              Chicken and Mushroom
            </h3>
            <h5 className="item-price" style={{ color: appTheme.secondary }}>
              AED <span style={{ color: appTheme.primary }}>89.00</span>
            </h5>
          </div>

          <p>
            Thin and crispy piza base with a white cream cheese topping, melted
            mozzarella cheese, porcini mushrooms and mixed peppers.
          </p>
        </div>

        {/* ingredients */}
        <div className="ingredients-block">
          <h4>ingredients</h4>
          <div className="item-ingredients">
            <div>
              <Image src={chicken} alt="chicken" width="25px" height="25px" />
              <p style={{ color: appTheme.text }}>chicken</p>
            </div>
            <div>
              <Image src={egg} alt="egg" width="25px" height="25px" />
              <p style={{ color: appTheme.text }}>egg</p>
            </div>
            <div>
              <Image src={bacon} alt="bacon" width="25px" height="25px" />
              <p style={{ color: appTheme.text }}>bacon</p>
            </div>
            <div>
              <Image src={lemon} alt="lemon" width="25px" height="25px" />
              <p style={{ color: appTheme.text }}>lemon</p>
            </div>
            <div>
              <Image src={onion} alt="onion" width="25px" height="25px" />
              <p style={{ color: appTheme.text }}>onions</p>
            </div>
          </div>
        </div>

        {/* allergy warnings */}
        <div className="warning-block">
          <h4>contains:</h4>
          <div className="allergies">
            <div
              style={{ borderColor: appTheme.primary, color: appTheme.text }}
            >
              <Image
                src={nuts}
                alt="nuts"
                width="22px"
                height="22px"
                layout="fixed"
              />
              <p>nuts</p>
            </div>
            <div
              style={{ borderColor: appTheme.primary, color: appTheme.text }}
            >
              <Image
                src={dairy}
                alt="dairy"
                width="22px"
                height="22px"
                layout="fixed"
              />
              <p>dairy</p>
            </div>
            <div
              style={{ borderColor: appTheme.primary, color: appTheme.text }}
            >
              <Image
                src={gluten}
                alt="gluten"
                width="22px"
                height="22px"
                layout="fixed"
              />
              <p>gluten</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuDetailsAnimatedCard
