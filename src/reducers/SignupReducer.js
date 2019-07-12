import produce from "immer";
import {
  CHANGE_INPUT,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "../actionTypes/SignupAT";

const initialState = {
  errorMessage: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmpassword: "",
  currentUser: {},
  users: []
};
export default function SignupReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.fieldName] = action.fieldValue;
        draft.isLoading = false;

        break;
      case SUBMIT_FORM:
        console.log(action.payload);
        break;
      case SUBMIT_FORM_SUCCESS:
        draft.currentUser = action.user;
        break;
      case SUBMIT_FORM_FAILURE:
        console.log(action.error);
        break;
      case GET_USERS:
        draft.isLoading = true;
        break;
      case GET_USERS_SUCCESS:
        console.log(action.users, "From Reducer");
        draft.isLoading = false;

        draft.users = action.users;
        break;
      case GET_USERS_FAILURE:
        console.log(action.error);
        break;
    }
  });
}
