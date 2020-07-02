import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import { clearCart } from '../../redux/cart/cart.actions';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price, clearCart, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ChAJpBbO4MbRiyexrCoK1rsl00H8YSIH3d';

  const onToken = token => {
    alert('Payment successful')
    clearCart()
    history.push('/')
  }

  return (
    <StripeCheckout 
      label='Pay now'
      name='CRWN CLOTHING'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'  
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
}) 

export default withRouter(connect(null, mapDispatchToProps)(StripeCheckoutButton));