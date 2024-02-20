import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ADD = "+"
const REMOVE = "-"

const CartSectionForMenu = ({ addToCart, removeFromCart, getNumInCart }) => {
    return (
            <div className='row'>
                <div className='col-3'>
                    <CustomButton id={"symbol"} text={ADD} onClickAction={addToCart} />
                </div>
                <div className='col-2'>
                    <h3 className="number">{getNumInCart}</h3>
                </div>
                <div className='col-3'>
                    <CustomButton id={"symbol"} text={REMOVE} onClickAction={removeFromCart}/>
                </div>
            </div>
    )
}

export default CartSectionForMenu;