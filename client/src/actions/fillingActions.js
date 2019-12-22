import axios from "axios";
import {
  GET_FILLINGS,
  ADD_FILLING,
  DELETE_FILLING,
  FILLINGS_LOADING,
  UPDATE_FILLING
} from "./types";
import { returnErrors } from "./errorActions";

export const getFillings = () => async dispatch => {
  try {
    dispatch(setItemsLoading());
    let API = "/api/v1/filling";

    const res = await axios.get(API);
    const data = res.data.data;
    dispatch({
      type: GET_FILLINGS,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const addFilling = item => async (dispatch, getState) => {
  try {
    let API = "/api/v1/filling";
    const res = await axios.post(API, item);
    const data = res.data.data;
    dispatch({
      type: ADD_FILLING,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const updateFilling = (item, id) => async (dispatch, getState) => {
  try {
    let API = `/api/v1/filling/${id}`;
    const res = await axios.put(API, item);
    const data = res.data.data;
    dispatch({
      type: UPDATE_FILLING,
      payload: data,
      id: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const deleteFilling = id => async (dispatch, getState) => {
  try {
    let API = `/api/v1/filling/${id}`;

    const res = await axios.delete(API);

    dispatch({
      type: DELETE_FILLING,
      payload: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const setItemsLoading = () => {
  return {
    type: FILLINGS_LOADING
  };
};
