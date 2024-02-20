import React from 'react';
import CustomLightButton from './CustomLightButton';
import InformationFormModal from './InformationFormModal';

const OrderRow = ( {subtotal, clearCart, getOrder, getMenuData} ) => {
    return (
        <div className='row'>
            <div className="col-5">
                <h3 id="subtotal" >{`Subtotal: $${subtotal}`}</h3>
            </div>
            <div className='col-3'>
                <InformationFormModal completeOrder={getOrder} menuData={getMenuData} subTotal={subtotal}/> 
                {/* <CustomButton text={'Order'} /> */}
            </div>
            <div className='col-3'>
                <CustomLightButton onClickAction={clearCart} text={'Clear all'}/>
            </div>
        </div>
    )
}
export default OrderRow;
