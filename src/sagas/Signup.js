import { put } from "redux-saga/effects";
import {
  submit_form_success,
  submit_form_failure,
  get_users_failure,
  get_users_success,
  submit_login_form_failure,
  submit_login_form_success,
  get_four_brands_failure,
  get_data_success,
  get_data_failure
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
    // Before SignUp and LogIn this will be called.
    const userResponse = yield fetch("http://localhost:4000/users");
    const users = yield userResponse.json();
    yield put(get_users_success(users));
  } catch (error) {
    yield put(get_users_failure(error));
  }
}

export function* loginUserSaga() {
  try {
    // This will only be called if the user is Correct user.
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

export function* getDataSaga() {
  try {
    // This will be called from all components upon page reload
    const chocolateResponse = yield fetch("http://localhost:4000/chocolates");
    const chocolates = yield chocolateResponse.json();

    const typesResponse = yield fetch("http://localhost:4000/types");
    const types = yield typesResponse.json();

    const brandsResponse = yield fetch("http://localhost:4000/brands");
    const brands = yield brandsResponse.json();

    const userId = localStorage.getItem("userId");
    const userResponse = yield fetch(
      `http://localhost:4000/users?id=${userId}`
    );
    const user = yield userResponse.json();

    yield put(get_data_success(chocolates, types, brands, user));
  } catch (err) {
    yield put(get_data_failure(err));
  }
}

/////// This was just to implement carousel on sign up page.....but too tiresome to continue.....
// export function* getFourBrandsSaga() {
//   try {
//     let urlappender = "?";
//     let j = 0;
//     const numbers = [];
//     let exist = false;
//     for (let i = 0; i < 4; i++) {
//       let randomnumber = Math.floor(Math.random() * Math.floor(8));
//       randomnumber += 1;
//       while (!exist) {
//         if (randomnumber === numbers[i]) {
//           exist = true;
//         }
//         j++;
//       }

//       if (!exist) {
//         numbers.push(randomnumber);
//         urlappender += `id=${randomnumber}&`;
//       }
//     }

//     urlappender = urlappender.substr(0, urlappender.length - 1);
//     console.log("//>>", urlappender);
//   } catch (err) {
//     yield put(get_four_brands_failure(err));
//   }
// }
// http://localhost:4000/brands?id=1&id=2
