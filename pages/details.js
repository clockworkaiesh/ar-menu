import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { FaHeart, FaRegHeart, FaChevronLeft } from 'react-icons/fa'

// slider images
import slide1 from '../public/images/menu/pizza-slider-1.jpg'
import slide2 from '../public/images/menu/pizza-slider-2.jpg'
import MenuDetailsAnimatedCard from '../src/components/MenuDetailsAnimatedCard'

const details = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isFavourite, setIsFavourite] = useState(false)
  function handleFavoutite() {
    setIsFavourite(!isFavourite)
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="page-wrapper">
      {/* menu image slider */}
      <div className="menu-carousel">
        {/* top header inside menu details page only */}
        <div className="details-page-header">
          <button>
            <Link href="/categories">
              <a>
                <FaChevronLeft />
              </a>
            </Link>
          </button>
          <h3>details</h3>
          <button onClick={() => handleFavoutite()}>
            {isFavourite ? <FaRegHeart /> : <FaHeart />}
          </button>
        </div>
        <Slider {...settings}>
          <div className='slide-image'>
            <Image src={slide1} alt="slide" />
          </div>
          <div className='slide-image'>
            <Image src={slide2} alt="slide" />
          </div>
        </Slider>
      </div>

      {/* menu details card that animated from bottom to top on first load */}
      <MenuDetailsAnimatedCard />
    </div>
  )
}

export default details
