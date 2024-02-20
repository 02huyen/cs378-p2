import React from 'react';

const CustomLightButton = ( {text, onClickAction} ) => {
    return (
        <button 
            type="button" 
            className="btn btn-outline-dark"
            onClick={onClickAction}>
                {text}</button>
    );
};

export default CustomLightButton;
