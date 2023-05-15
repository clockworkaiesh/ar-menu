import React, { useState } from 'react'

// icons
import catBurger from '../public/images/icons/cat-burger.png'
import catPizza from '../public/images/icons/cat-pizza.png'
import catSalad from '../public/images/icons/cat-salad.png'
import catShake from '../public/images/icons/cat-bobba.png'
import catDessert from '../public/images/icons/cat-desserts.png'
import catSteak from '../public/images/icons/cat-steak.png'
import catSandwich from '../public/images/icons/cat-sandwich.png'
import catPasta from '../public/images/icons/cat-pasta.png'

// images
import CategoryButton from '../src/components/CategoryButton'
import MenuItem from '../src/components/MenuItem'
import burger1 from '../public/images/menu/burger1.png'
import pizza from '../public/images/menu/pizza1.png'
import pasta from '../public/images/menu/pasta1.png'
import salad from '../public/images/menu/salad1.png'
import steak from '../public/images/menu/steak1.png'
import shake from '../public/images/menu/shake1.png'
import dessert from '../public/images/menu/dessert1.png'

const menuItems = [
  { thumbnail: burger1, name: 'Cheeseburger', category: 'burger' },
  { thumbnail: pizza1, name: 'Margherita Pizza', category: 'pizza' },
  { thumbnail: salad1, name: 'Greek Salad', category: 'salad' },
]

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [filteredMenuItems, setFilteredMenuItems] = useState([])

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
    setFilteredMenuItems(
      menuItems.filter((item) => item.category === categoryName)
    )
  }

  return (
    <div className="categories">
      <div className="categories-list-slider">
        <button
          className="category-button"
          onClick={() => handleCategoryClick('burger')}
        >
          <Image src={catBurger} alt="Burgers" />
          <p>Burgers</p>
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryClick('pizza')}
        >
          <Image src={catPizza} alt="Pizzas" />
          <p>Pizzas</p>
        </button>
        <button
          className="category-button"
          onClick={() => handleCategoryClick('salad')}
        >
          <Image src={catSalad} alt="Salads" />
          <p>Salads</p>
        </button>
      </div>

      <div className="category-menu-items">
      {selectedCategory
          ? filteredMenuItems.map((item, index) => (
              <MenuItem
                thumbnail={item.thumbnail}
                name={item.name}
                key={`${item.name}-${index}`}
              />
            ))
          : menuItems.map((item, index) => (
              <MenuItem
                thumbnail={item.thumbnail}
                name={item.name}
                key={`${item.name}-${index}`}
              />
            ))}
      </div>
    </div>
  )
}

export default Categories
