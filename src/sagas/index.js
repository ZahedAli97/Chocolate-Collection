import { takeLatest, all } from "redux-saga/effects";
import { SUBMIT_FORM, GET_USERS } from "../actionTypes/SignupAT";
import { signupSaga, getUsersSaga } from "./Signup";

export function* signupSagaWatcher() {
  yield all([
    takeLatest(SUBMIT_FORM, signupSaga),
    takeLatest(GET_USERS, getUsersSaga)
  ]);
}
