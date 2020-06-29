import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selector';

import CustomButton from '../custom-button/custom-buttom.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapSatetToProps = state => ({
  cartItems: selectCartItems(state),
})

export default connect(mapSatetToProps)(CartDropdown);