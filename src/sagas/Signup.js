import { put } from "redux-saga/effects";
import {
  submit_form_success,
  submit_form_failure,
  get_users_failure,
  get_users_success,
  submit_login_form_failure,
  submit_login_form_success
} from "../actionCreators/SignupAC";

export function* signupSaga(action) {
  try {
    const { firstName, lastName, email, password } = action.payload;
    const body = { firstName, lastName, email, password };
    const submitResponse = yield fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
        // Noting the db that package is of type json
      }
    });

    const user = yield submitResponse.json();
    yield put(submit_form_success(user));
  } catch (error) {
    yield put(submit_form_failure(error));
  }
}

export function* getUsersSaga() {
  try {
    const userResponse = yield fetch("http://localhost:4000/users");
    const users = yield userResponse.json();
    yield put(get_users_success(users));
  } catch (error) {
    yield put(get_users_failure(error));
  }
}

export function* loginUserSaga() {
  try {
    const chocolateResponse = yield fetch("http://localhost:4000/chocolates");
    const chocolates = yield chocolateResponse.json();

    const typesResponse = yield fetch("http://localhost:4000/types");
    const types = yield typesResponse.json();

    const brandsResponse = yield fetch("http://localhost:4000/brands");
    const brands = yield brandsResponse.json();

    yield put(submit_login_form_success(chocolates, types, brands));
  } catch (err) {
    yield put(submit_login_form_failure(err));
  }
}
