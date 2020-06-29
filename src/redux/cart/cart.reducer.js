import CartActionTypes from './cart.types';

const initial = {
  hidden: true,
}

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
}

export default cartReducer;