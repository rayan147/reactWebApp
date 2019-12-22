import axios from "axios";
import {
  GET_FLAVORS,
  ADD_FLAVOR,
  DELETE_FLAVOR,
  FLAVORS_LOADING,
  UPDATE_FLAVOR
} from "./types";
import { returnErrors } from "./errorActions";

export const getFlavors = () => async dispatch => {
  try {
    dispatch(setItemsLoading());
    let API = "/api/v1/flavor";

    const res = await axios.get(API);
    const data = res.data.data;
    dispatch({
      type: GET_FLAVORS,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const addFlavor = item => async (dispatch, getState) => {
  try {
    let API = "/api/v1/flavor";
    const res = await axios.post(API, item);
    const data = res.data.data;
    dispatch({
      type: ADD_FLAVOR,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const updateFlavor = (item, id) => async (dispatch, getState) => {
  try {
    let API = `/api/v1/flavor/${id}`;
    const res = await axios.put(API, item);
    const data = res.data.data;
    dispatch({
      type: UPDATE_FLAVOR,
      payload: data,
      id: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const deleteFlavor = id => async (dispatch, getState) => {
  try {
    let API = `/api/v1/flavor/${id}`;

    const res = await axios.delete(API);

    dispatch({
      type: DELETE_FLAVOR,
      payload: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const setItemsLoading = () => {
  return {
    type: FLAVORS_LOADING
  };
};
