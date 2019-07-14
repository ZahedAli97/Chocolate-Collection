import { takeLatest, all } from "redux-saga/effects";
import { SUBMIT_FORM, GET_USERS, LOGIN_FORM } from "../actionTypes/SignupAT";
import { signupSaga, getUsersSaga, loginUserSaga } from "./Signup";

export function* signupSagaWatcher() {
  yield all([
    takeLatest(SUBMIT_FORM, signupSaga),
    takeLatest(GET_USERS, getUsersSaga),
    takeLatest(LOGIN_FORM, loginUserSaga)
  ]);
}
