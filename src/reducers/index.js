import { combineReducers } from "redux";

const allReducers = combineReducers({
  numLikes: (state = 0, action) => {
    switch (action.type) {
      case "CLICK_LIKE":
        return state + 1;
      default:
        return state;
    }
  },
});

export default allReducers;
