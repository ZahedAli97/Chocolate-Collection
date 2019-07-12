import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import SignupReducer from "../reducers/SignupReducer";
import logger from "redux-logger";
import { signupSagaWatcher } from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  SignupReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(signupSagaWatcher);

export default store;
