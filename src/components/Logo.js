import React from 'react';

/* Followed this tutorial on using require function 
https://stackoverflow.com/questions/34582405/react-wont-load-local-images */

const Logo = ({logoName, description}) => {
    return (
        <div>
            <img src={require(`../images/${logoName}`)} id='logo' alt={description}/>
        </div>
    );
};
export default Logo;
