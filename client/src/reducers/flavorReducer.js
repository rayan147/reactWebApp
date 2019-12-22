import {
  GET_FLAVORS,
  ADD_FLAVOR,
  DELETE_FLAVOR,
  FLAVORS_LOADING,
  UPDATE_FLAVOR
} from "../actions/types";

const initialState = {
  flavors: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FLAVORS:
      return {
        ...state,
        flavors: action.payload
      };

    case DELETE_FLAVOR:
      return {
        ...state,
        flavors: state.flavors.filter(flavor => flavor._id !== action.payload)
      };
    case UPDATE_FLAVOR:
      return {
        ...state,
        flavors: state.flavors.map(flavor =>
          flavor._id === action.id ? [action.payload, ...state.flavors] : flavor
        )
      };
    case ADD_FLAVOR:
      return {
        ...state,
        flavors: [action.payload, ...state.flavors]
      };
    case FLAVORS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
