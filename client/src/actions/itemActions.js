import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  UPDATE_ITEM
} from "./types";
import { returnErrors } from "./errorActions";

export const getItems = () => async dispatch => {
  try {
    dispatch(setItemsLoading());
    let API = "/api/v1/soak";
    const res = await axios.get(API);
    const data = res.data.data;

    dispatch({
      type: GET_ITEMS,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const addItem = item => async (dispatch, getState) => {
  try {
    let API = "/api/v1/soak";
    const res = await axios.post(API, item);
    const data = res.data.data;
    dispatch({
      type: ADD_ITEM,
      payload: data
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const updateItem = (id, item) => async (dispatch, getState) => {
  try {
    let API = `/api/v1/soak/${id}`;
    const res = await axios.put(API, id, item);
    const data = res.data.data;
    dispatch({
      type: UPDATE_ITEM,
      payload: data,
      id: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};
export const deleteItem = id => async (dispatch, getState) => {
  try {
    let API = `/api/v1/soak/${id}`;

    const res = await axios.delete(API);

    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  } catch (error) {
    dispatch(returnErrors(error.response.data, error.response.status));
  }
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
