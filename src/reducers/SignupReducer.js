import produce from "immer";
import {
  CHANGE_INPUT,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  SET_ERROR_MESSAGE,
  LOGIN_FORM,
  LOGIN_FORM_SUCCESS,
  LOGOUT,
  GET_FOUR_BRANDS,
  GET_FOUR_BRANDS_SUCCESS,
  GET_FOUR_BRANDS_FAILURE,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from "../actionTypes/SignupAT";

const initialState = {
  isLoading: false,
  isLoggedIn: "true" === localStorage.getItem("isLoggedIn"),
  searchWord: "",
  loginEmail: "", //For log in
  loginPassword: "",
  errorMessage: "",
  firstName: "",
  lastName: "",
  email: "", // For sign up
  password: "",
  confirmpassword: "",
  currentUser: {},
  users: [],
  chocolates: [],
  types: [],
  brands: []
};
export default function SignupReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_ERROR_MESSAGE:
        draft.errorMessage = action.message;
        break;
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
        draft.isLoading = false;
        draft.users = action.users;
        break;
      case GET_USERS_FAILURE:
        console.log(action.error);
        break;
      case LOGIN_FORM:
        draft.isLoading = true;
        draft.isLoggedIn = true;
        draft.currentUser = action.user;
        break;
      case LOGIN_FORM_SUCCESS:
        draft.isLoading = false;
        draft.chocolates = action.chocolates;
        draft.types = action.types;
        draft.brands = action.brands;
        break;
      case GET_FOUR_BRANDS:
        draft.isLoading = true;
        break;
      case GET_FOUR_BRANDS_SUCCESS:
        draft.isLoading = false;
        draft.brands = action.brands;
        break;
      case GET_FOUR_BRANDS_FAILURE:
        console.log(action.error);
        break;
      case GET_DATA:
        draft.isLoading = true;
        //draft.currentUser = action.user;
        break;
      case GET_DATA_SUCCESS:
        draft.isLoading = false;
        draft.chocolates = action.chocolates;
        draft.types = action.types;
        draft.brands = action.brands;
        const [user] = action.user;
        draft.currentUser = user;
        break;
      case GET_DATA_FAILURE:
        console.log(action.error);
        break;
      case LOGOUT:
        draft.isLoading = true;
        draft.isLoggedIn = false;
        draft.searchWord = "";
        draft.loginEmail = ""; //For log in
        draft.loginPassword = "";
        draft.errorMessage = "";
        draft.firstName = "";
        draft.lastName = "";
        draft.email = ""; // For sign up
        draft.password = "";
        draft.confirmpassword = "";
        draft.currentUser = {};
        draft.users = [];
        draft.chocolates = [];
        draft.types = [];
        draft.brands = [];
        break;
    }
  });
}
