export const addItemToCart = (cartItems, itemToAdd) => {
  // 1) Check if the item is already on cart
  const alreadyInCart = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  )

  // 2) if it is, we just increase the quantity
  if (alreadyInCart) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  // 4) If its not, we initialize with quantity 1
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const item = cartItems.find(cartItem =>
    cartItem.id === itemToRemove.id 
  )

  if (item.quantity < 2) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }

  return cartItems.map(cartItem => 
    cartItem.id === itemToRemove.id ?
    { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}