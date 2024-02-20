import './App.css';
import React, { useState } from 'react';
import MenuItem from './components/MenuItem';
import Logo from './components/Logo'
import CafeDescription from './components/CafeDescription';
import OrderRow from './components/OrderRow';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const slogan = "Affordable meals made from-scratch"
const review = "Voted best cafe at UT"

let initialCartItems = new Array(menuItems.length).fill(0)

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState(initialCartItems)

  const clearCart = () => {
    setTotalPrice(0)
    const updatedCart = cartItems.map(item => { return 0 })
    setCartItems(updatedCart)
  }

  const addToCart = (menuItem) => {
    setTotalPrice(totalPrice + menuItem.price)
    const updatedCart = cartItems.map((item, itemId) => {
      if (menuItem.id - 1 === itemId)
        return item + 1
      else
        return item
    })
    setCartItems(updatedCart)
  }

  const removeFromCart = (menuItem) => {
    if (cartItems[menuItem.id - 1] === 0)
      return
    setTotalPrice(totalPrice - menuItem.price)
    const updatedCart = cartItems.map((item, itemId) => {
      if (menuItem.id - 1 === itemId)
        return item - 1
      else
        return item
    })
    setCartItems(updatedCart)
  }

  return (
    <div>
      <Logo logoName={'logo.jpg'} description={"BonBon Cafe logo"} />
      <CafeDescription italicsText={slogan} regularText={review} />
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map((menuItem) => (
            <MenuItem 
            key={menuItem.id}
            title={menuItem.title}
            imageFile={menuItem.imageName}
            description={menuItem.description}
            price={menuItem.price}
            addToCart={() => addToCart(menuItem)}
            removeFromCart={() => removeFromCart(menuItem)}
            getNumInCart={cartItems[menuItem.id - 1]}
          />
        ))}
      </div>
      <div className="cart">
          <OrderRow 
            subtotal={Math.abs(totalPrice).toFixed(2)}
            clearCart={() => clearCart()}
            getOrder={cartItems}
            getMenuData={menuItems} 
            />
      </div>
    </div>
  );
}

export default App;
