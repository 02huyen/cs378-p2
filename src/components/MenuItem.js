import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartSectionForMenu from './CartSectionForMenu';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, imageFile, description, price, addToCart, removeFromCart, getNumInCart }) => {

    return (
        <div className="row">
            <div className="col-4">
            <img src={require(`../images/${imageFile}`)} id="menuItem" alt={description}/>
            </div>
            <div className="col-6">
                <h2>{title}</h2>
                <p id='menuDescription'>{description}</p>
                <div className="row">
                    <div className="col-6">
                        <h3 className="number">{`$${price}`}</h3>
                    </div>
                    <div className="col-6">
                        <CartSectionForMenu addToCart={addToCart} removeFromCart={removeFromCart} getNumInCart={getNumInCart}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
