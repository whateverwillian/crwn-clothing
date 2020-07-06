import ShopActionTypes from './shop.types';

const initial = {
  collections: null,
}

const shopReducer = (state = initial, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    
    default:
      return state;
  }
}

export default shopReducer;