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
  LOGOUT
} from "../actionTypes/SignupAT";

export function change_input(fieldName, fieldValue) {
  return { type: CHANGE_INPUT, fieldName, fieldValue };
}
export function set_error_msg(message) {
  return { type: SET_ERROR_MESSAGE, message };
}

export function submit_form(payload) {
  return { type: SUBMIT_FORM, payload };
}

export function submit_form_success(user) {
  return { type: SUBMIT_FORM_SUCCESS, user };
}

export function submit_form_failure(error) {
  return { type: SUBMIT_FORM_FAILURE, error };
}

export function get_users() {
  return { type: GET_USERS };
}

export function get_users_success(users) {
  return { type: GET_USERS_SUCCESS, users };
}

export function get_users_failure(error) {
  return { type: GET_USERS_FAILURE, error };
}

export function submit_login_form(user) {
  return { type: LOGIN_FORM, user };
}

export function submit_login_form_success(chocolates, types, brands) {
  return { type: LOGIN_FORM_SUCCESS, chocolates, types, brands };
}

export function submit_login_form_failure(error) {
  return { type: LOGIN_FORM_FAILURE, error };
}

export function logout() {
  return { type: LOGOUT };
}
