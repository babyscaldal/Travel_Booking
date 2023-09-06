import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../types/actions.types";
import { handleLoginSaga } from "./login.saga";

function* rootSaga() {
  yield takeLatest(actionTypes.USER_LOGIN_RES, handleLoginSaga);
}

export default rootSaga;
