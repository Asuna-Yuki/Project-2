import { setAlert } from "./alert";
import {
  ADD_ADDRESS,
  ADD_ITEM_CART,
  LOAD_CART,
  SET_PAYMENT_METHOD,
  REMOVE_ITEM_CART,
} from "./types";

// set item in cart and in localstorage
export const addItemInCart = (item) => (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ITEM_CART,
      payload: item,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
  }
};

// Remove item from cart and localstorage
export const removeItemInCart = (itemID) => (dispatch, getState) => {
  try {
    dispatch({
      type: REMOVE_ITEM_CART,
      payload: itemID,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
  }
};

// load cart
export const loadCart = () => (dispatch) => {
  try {
    dispatch({
      type: LOAD_CART,
    });
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
  }
};

// save address
export const setShippingAddress = (address) => (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ADDRESS,
      payload: address,
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify(getState().cart.shippingAddress)
    );
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
  }
};

// save payment method
export const paymentMethod = (paymentMethod) => (dispatch, getState) => {
  try {
    dispatch({
      type: SET_PAYMENT_METHOD,
      payload: paymentMethod,
    });
    localStorage.setItem(
      "paymentMethod",
      JSON.stringify(getState().cart.paymentMethod)
    );
  } catch (err) {
    const errors = [err.message];
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error)));
    }
  }
};
