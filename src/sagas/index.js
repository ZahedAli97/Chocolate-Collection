import { takeLatest, all } from "redux-saga/effects";
import {
  SUBMIT_FORM,
  GET_USERS,
  LOGIN_FORM,
  GET_FOUR_BRANDS,
  GET_DATA
} from "../actionTypes/SignupAT";
import { signupSaga, getUsersSaga, loginUserSaga, getDataSaga } from "./Signup";

export function* signupSagaWatcher() {
  try {
    yield all([
      takeLatest(SUBMIT_FORM, signupSaga),
      takeLatest(GET_USERS, getUsersSaga),
      takeLatest(LOGIN_FORM, loginUserSaga),
      takeLatest(GET_DATA, getDataSaga)
    ]);
  } catch (err) {
    console.log(err);
  }
}
