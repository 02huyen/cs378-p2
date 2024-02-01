import React from 'react';
import AddButton from './AddButton';
import 'bootstrap/dist/css/bootstrap.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, imageFile, description, price, attribute }) => {
    return (
        <div className="row">
            <div className="col-4">
            <img src={require(`../images/${imageFile}`)} id="menuItem" alt={attribute}/>
            </div>
            <div className="col-6">
                <h2>{title}</h2>
                <p id='menuDescription' >{description}</p>
                <div className="row">
                    <div className="col-6">
                        <h3 id="price">{`$${price}`}</h3>
                    </div>
                    <AddButton/>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
