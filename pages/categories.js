/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";

// react animation library
import { Slide, Fade } from "react-awesome-reveal";
// icons
import catShake from "../public/images/icons/cat-bobba.png";
import catBurger from "../public/images/icons/cat-burger.png";
import catDesserts from "../public/images/icons/cat-desserts.png";
import catPasta from "../public/images/icons/cat-pasta.png";
import catPizza from "../public/images/icons/cat-pizza.png";
import catSalad from "../public/images/icons/cat-salad.png";
import catSandwich from "../public/images/icons/cat-sandwich.png";
import catSteak from "../public/images/icons/cat-steak.png";
// images
import MenuItem from "../src/components/MenuItem";
import shake1 from "../public/images/menu/shake1.png";
import shake2 from "../public/images/menu/shake2.png";
import shake3 from "../public/images/menu/shake3.png";
import burger1 from "../public/images/menu/burger1.png";
import burger2 from "../public/images/menu/burger2.png";
import burger3 from "../public/images/menu/burger3.png";
import burger4 from "../public/images/menu/burger4.png";
import dessert1 from "../public/images/menu/dessert1.png";
import dessert2 from "../public/images/menu/dessert2.png";
import pasta1 from "../public/images/menu/pasta1.png";
import pasta2 from "../public/images/menu/pasta2.png";
import pasta3 from "../public/images/menu/pasta3.png";
import pasta4 from "../public/images/menu/pasta4.png";
import pizza1 from "../public/images/menu/pizza1.png";
import pizza2 from "../public/images/menu/pizza2.png";
import pizza3 from "../public/images/menu/pizza3.png";
import pizza4 from "../public/images/menu/pizza4.png";
import salad1 from "../public/images/menu/salad1.png";
import salad2 from "../public/images/menu/salad2.png";
import salad3 from "../public/images/menu/salad3.png";
import salad4 from "../public/images/menu/salad4.png";
import sandwich1 from "../public/images/menu/sandwich1.png";
import sandwich2 from "../public/images/menu/sandwich2.png";
import sandwich3 from "../public/images/menu/sandwich3.png";
import sandwich4 from "../public/images/menu/sandwich4.png";
import steak1 from "../public/images/menu/steak1.png";
import steak2 from "../public/images/menu/steak2.png";
import steak3 from "../public/images/menu/steak3.png";
import searchIcon from "../public/images/icons/search-icon.svg";
import ThemeContext from "../src/ThemeContext";
import AppHeader from "../src/components/AppHeader";
// an array of object for all menu items
const menuItems = [
  { price: 45, thumbnail: burger1, name: "burger1", category: "burger" },
  { price: 15, thumbnail: burger2, name: "burger2", category: "burger" },
  { price: 25, thumbnail: burger3, name: "burger3", category: "burger" },
  { price: 35, thumbnail: burger4, name: "burger4", category: "burger" },
  { price: 45, thumbnail: dessert1, name: "dessert1", category: "dessert" },
  { price: 15, thumbnail: dessert2, name: "dessert2", category: "dessert" },
  { price: 25, thumbnail: pasta1, name: "pasta1", category: "pasta" },
  { price: 35, thumbnail: pasta2, name: "pasta2", category: "pasta" },
  { price: 45, thumbnail: pasta3, name: "pasta3", category: "pasta" },
  { price: 15, thumbnail: pasta4, name: "pasta4", category: "pasta" },
  { price: 25, thumbnail: pizza1, name: "pizza1", category: "pizza" },
  { price: 35, thumbnail: pizza2, name: "pizza2", category: "pizza" },
  { price: 15, thumbnail: pizza3, name: "pizza3", category: "pizza" },
  { price: 25, thumbnail: pizza4, name: "pizza4", category: "pizza" },
  { price: 35, thumbnail: salad1, name: "salad1", category: "salad" },
  { price: 55, thumbnail: salad2, name: "salad2", category: "salad" },
  { price: 15, thumbnail: salad3, name: "salad3", category: "salad" },
  { price: 35, thumbnail: salad4, name: "salad4", category: "salad" },
  { price: 45, thumbnail: sandwich1, name: "sandwich1", category: "sandwich" },
  { price: 15, thumbnail: sandwich2, name: "sandwich2", category: "sandwich" },
  { price: 15, thumbnail: shake1, name: "shake1", category: "shake" },
  { price: 25, thumbnail: shake2, name: "shake2", category: "shake" },
  { price: 35, thumbnail: shake3, name: "shake3", category: "shake" },
  { price: 5, thumbnail: sandwich3, name: "sandwich3", category: "sandwich" },
  { price: 15, thumbnail: sandwich4, name: "sandwich4", category: "sandwich" },
  { price: 25, thumbnail: steak1, name: "steak1", category: "steak" },
  { price: 35, thumbnail: steak2, name: "steak2", category: "steak" },
  { price: 45, thumbnail: steak3, name: "steak3", category: "steak" },
];
function Categories() {
  // searchbox
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredMenuItems, setFilteredMenuItems] = useState(
    menuItems.filter((item) => item.category === "burger")
  );
  const [filteredItemCount, setFilteredItemCount] = useState(0);
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setFilteredMenuItems(
      menuItems.filter((item) => item.category === categoryName)
    );
    setFilteredItemCount(filteredItemCount.length);
  };
  useEffect(() => {
    setFilteredItemCount(filteredMenuItems.length);
  }, [filteredMenuItems]);

  // THEMING
  const appTheme = useContext(ThemeContext);
  const categoryButton = css({
    backgroundColor: appTheme.primary,
    color: "#fff",
  });
  const categoryButtonHover = css({
    "&:hover": categoryButton,
  });
  return (
    <>
      <AppHeader />

      <div className="categories">
        {/* App Header */}
        <div className="welcome">
          <h2 style={{ color: appTheme.secondary }}>
            What would you to order today?
          </h2>

          <div className="search-box">
            <Image src={searchIcon} alt="search" />
            <input type="text" value={searchText} placeholder="Search" onChange={(e) => setSearchText(e.target.value)}/>
          </div>
        </div>

        <Slide direction="right" cascade>
          <div className="categories-list-slider">
            <button
              className="category-button"
              onClick={() => handleCategoryClick("burger")}
              // eslint-disable-next-line react/no-unknown-property
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catBurger} alt="burgers" />
              </div>
              <span>burgers</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("dessert")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catDesserts} alt="dessert" />
              </div>
              <span>dessert</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("pasta")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catPasta} alt="pasta" />
              </div>
              <span>pasta</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("pizza")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catPizza} alt="pizza" />
              </div>
              <span>pizza</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("salad")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catSalad} alt="salad" />
              </div>
              <span>salad</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("shake")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catShake} alt="shakes" />
              </div>
              <span>Shakes</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("sandwich")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catSandwich} alt="sandwich" />
              </div>
              <span>sandwich</span>
            </button>
            <button
              className="category-button"
              onClick={() => handleCategoryClick("steak")}
              css={categoryButtonHover}
            >
              <div className="cat-thumb">
                <Image src={catSteak} alt="steak" />
              </div>
              <span>steak</span>
            </button>
          </div>
        </Slide>

        <h3 className="results-count" style={{ color: appTheme.secondary }}>
          {filteredMenuItems.length} results found
        </h3>
        <div className="category-menu-items">
          {selectedCategory
            ? filteredMenuItems.map((item) => (
                  <MenuItem
                    thumbnail={item.thumbnail}
                    name={item.name}
                    key={item.name}
                    price={item.price}
                  />
              ))
            : menuItems.map((item) => (
                  <MenuItem
                    thumbnail={item.thumbnail}
                    name={item.name}
                    key={item.name}
                    price={item.price}
                  />
              ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
