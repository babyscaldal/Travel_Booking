import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../types/actions.types";
import { handleLoginSaga } from "./login.saga";
import { handleRegisterSaga } from "./register.saga";

function* rootSaga() {
  yield takeLatest(actionTypes.USER_LOGIN_RES, handleLoginSaga);
  yield takeLatest(actionTypes.USER_REGISTER_RES, handleRegisterSaga);
}

export default rootSaga;
