import {
  GET_FILLINGS,
  ADD_FILLING,
  FILLINGS_LOADING,
  DELETE_FILLING,
  UPDATE_FILLING
} from "../actions/types";

const initialState = {
  fillings: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FILLINGS:
      return {
        ...state,
        fillings: action.payload
      };

    case DELETE_FILLING:
      return {
        ...state,
        fillings: state.fillings.filter(flavor => flavor._id !== action.payload)
      };
    case UPDATE_FILLING:
      return {
        ...state,
        fillings: state.fillings.map(flavor =>
          flavor._id === action.id
            ? [action.payload, ...state.fillings]
            : flavor
        )
      };
    case ADD_FILLING:
      return {
        ...state,
        fillings: [action.payload, ...state.fillings]
      };
    case FILLINGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
