import {LOGIN_SUCCESS, INCREMENT, DECREMENT, SET_COUNT} from '../actions/types';

const initialState = {
  count: 0,
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, isLogin: true}
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};
    case SET_COUNT:
      return {...state, count: action.payload};
    default:
      return state;
  }
};
