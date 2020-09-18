import { CHANGE_FILTER } from "../actions/actionType";

const filter = (state = 'All', action) => {
  console.log(state,action)
    switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filter