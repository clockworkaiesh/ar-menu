import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaHeart, FaRegHeart, FaChevronLeft } from "react-icons/fa";
import ar from "../public/images/icons/ar-icon.svg";
// slider images
import slide1 from "../public/images/menu/pizza-slider-1.jpg";
import slide2 from "../public/images/menu/pizza-slider-2.jpg";
import MenuDetailsAnimatedCard from "../src/components/MenuDetailsAnimatedCard";
// Context setup
import ThemeContext from "../src/ThemeContext";
import AppHeader from "../src/components/AppHeader";
const details = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isFavourite, setIsFavourite] = useState(false);
  function handleFavoutite() {
    setIsFavourite(!isFavourite);
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const appTheme = useContext(ThemeContext);
  const menuDetailsCardRef = useRef(null);
  useEffect(() => {
    menuDetailsCardRef.current.classList.add("up");
  }, []);
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
            {isFavourite ? <FaHeart /> :  <FaRegHeart />}
          </button>
        </div>
        <Slider {...settings}>
          <div className="slide-image">
            <Image
              src={slide1}
              alt="slide"
              // width="290px"
              // height="200px"
              // layout="fixed"
            />
          </div>
          <div className="slide-image">
            <Image
              src={slide2}
              alt="slide"
              // width="290px"
              // height="200px"
              // layout="fixed"
            />
          </div>
        </Slider>
      </div>

      {/* menu details card that animated from bottom to top on first load */}
      <div className="menu-card-wrap" ref={menuDetailsCardRef}>
        <button
          className="ar-btn"
          style={{ backgroundColor: appTheme.primary }}
        >
          <div className="ar-icon">
            <Image src={ar} alt="ar" width="28px" height="28px" />
          </div>
          <span>AR</span>
        </button>
        <MenuDetailsAnimatedCard />
      </div>
    </div>
  );
};

export default details;
