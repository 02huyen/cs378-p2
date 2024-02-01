import React from 'react';

const CafeDescription = ({italicsText, regularText}) => {
    return (
        <div>
            <h3 id="cafelabel">{italicsText}</h3>
            <h3 id="cafereview">{regularText}</h3>
        </div>
       
    );
};
export default CafeDescription;
