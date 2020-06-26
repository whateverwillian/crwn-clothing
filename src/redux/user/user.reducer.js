import { UserActionTypes } from './user.types';

const initial = {
  currentUser: null,
}

const userReducer = (state = initial, action = {}) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
  
    default:
      return state;
  }
}

export default userReducer;