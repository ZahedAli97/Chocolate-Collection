//Sign up is just file name....this file contains Action Creators for whole App.

import {
  CHANGE_INPUT,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  SET_ERROR_MESSAGE,
  LOGIN_FORM,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_FAILURE,
  LOGOUT,
  GET_FOUR_BRANDS,
  GET_FOUR_BRANDS_SUCCESS,
  GET_FOUR_BRANDS_FAILURE,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from "../actionTypes/SignupAT";

// Change any state of store with chnage input....fieldName represents the name of the property in state
//and fieldValue represents the value you want for property
export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}

// To set error messages on the while app
export function set_error_msg(message) {
  return { type: SET_ERROR_MESSAGE, message };
}

// Submit Sign Up form.
export function submit_form(payload) {
  return { type: SUBMIT_FORM, payload };
}

// Success upon submit form in db
export function submit_form_success(user) {
  return { type: SUBMIT_FORM_SUCCESS, user };
}

export function submit_form_failure(error) {
  return { type: SUBMIT_FORM_FAILURE, error };
}

// Before Sign Up and Log In
export function get_users() {
  return { type: GET_USERS };
}

export function get_users_success(users) {
  return { type: GET_USERS_SUCCESS, users };
}

export function get_users_failure(error) {
  return { type: GET_USERS_FAILURE, error };
}

// Action Creator for login form
export function submit_login_form(user) {
  return { type: LOGIN_FORM, user };
}

// Upon login I'm Getting all the data to displaying everything.
export function submit_login_form_success(chocolates, types, brands) {
  return { type: LOGIN_FORM_SUCCESS, chocolates, types, brands };
}

export function submit_login_form_failure(error) {
  return { type: LOGIN_FORM_FAILURE, error };
}

// Clear everything from state on LogOut
export function logout() {
  return { type: LOGOUT };
}
// Try for Carousel
export function get_four_brands() {
  return { type: GET_FOUR_BRANDS };
}

export function get_four_brands_success(brands) {
  return { type: GET_FOUR_BRANDS_SUCCESS, brands };
}
export function get_four_brands_failure(error) {
  return { type: GET_FOUR_BRANDS_FAILURE, error };
}

// Only on Page Reload get the data.
export function get_data() {
  return { type: GET_DATA };
}

export function get_data_success(chocolates, types, brands, user) {
  return { type: GET_DATA_SUCCESS, chocolates, types, brands, user };
}

export function get_data_failure(error) {
  return { type: GET_DATA_FAILURE, error };
}
