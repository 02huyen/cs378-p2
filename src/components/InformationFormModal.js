// Bootstrap Forms
// https://getbootstrap.com/docs/4.0/components/forms/

import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomLightButton from './CustomLightButton';

const InformationFormModal = ({ completeOrder, menuData, subTotal }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [orderComplete, setOrderComplete] = useState(false)
    const [noItemsInCart, setNoItemsInCart] = useState(false)

    const open = () => {
        if (parseFloat(subTotal) === 0) {
            setNoItemsInCart(true)
        }
        else {
            setIsOpen(true)
        }
            
    }
    const close = () => {
        setIsOpen(false)
    }
    const orderCompleteOpen = () => {
        setIsOpen(false)
        setOrderComplete(true)
    }
    const orderCompleteClose = () => {
        setOrderComplete(false)
    }
    return (
        <div>
            <CustomButton text={'Order'} onClickAction={open}/>
            <Modal isOpen={isOpen}> 
                <h3>Confirm your order</h3>
                <h6>Cart</h6>
                {menuData.map((menuItem) => {
                    if (completeOrder[menuItem.id - 1] !== 0) {
                        return <p className='confirm-order' key={menuItem.id} >{`${completeOrder[menuItem.id - 1]} ${menuItem.title}`}</p>
                    }
                    return null
                })}
                <br />
                <h6 className='confirm-order'>{`Subtotal: $${subTotal}`}</h6>
                <br />
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label>Billing address</label>
                        <input className="form-control" placeholder="1234 Example St." />
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-8'>
                            <CustomButton text={'Confirm order'} onClickAction={orderCompleteOpen} />
                        </div>
                        <div className='col-3'>
                            <CustomLightButton text={'Cancel'} onClickAction={close} />
                        </div>
                    </div>
                </form>
            </Modal>
            <Modal isOpen={orderComplete}>
            <h3 id='confirmed-order-title'>Your order is confirmed!</h3>
            <div className='row'>
                <div className='col'>
                    <CustomButton text={'Ok!'} onClickAction={orderCompleteClose} />
                </div>
          </div>
        </Modal>
        <Modal isOpen={noItemsInCart}>
            <h3 id='confirmed-order-title'>There is nothing in your cart!</h3>
            <div className='row'>
                <div className='col'>
                    <CustomButton text={'Finish'} onClickAction={() => setNoItemsInCart(false)} /> 
                </div>
            </div>
        </Modal>                 
    </div>
    )      
}

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return;
  
    return (
      <div id='fade-background'>
        <div id='modal'>
          {children}
        </div>
      </div>
    );
  };
  
export default InformationFormModal;