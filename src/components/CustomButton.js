import React from 'react';

const CustomButton = ( {text, onClickAction, id} ) => {
    return (
        <button 
            id={id}
            type="button" 
            className="btn btn-dark"
            onClick={onClickAction}>
                {text}</button>
    );
};

export default CustomButton;
