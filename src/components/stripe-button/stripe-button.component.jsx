import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ChAJpBbO4MbRiyexrCoK1rsl00H8YSIH3d';

  const onToken = token => {
    console.log(token);
    alert('Payment successful')
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

export default StripeCheckoutButton;