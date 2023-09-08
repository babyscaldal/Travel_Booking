import { call, put } from "redux-saga/effects";
import { actionTypes } from "../types/actions.types";
import { IUserLoginRes } from "../types/userType";
import userApi from "../app/userApi";

interface IActionProps {
  type?: string;
  payload?: any;
}

export function* handleLoginSaga(action: IActionProps) {
  // console.log("login-saga user: ", action.payload);
  try {
    const res: IUserLoginRes = yield call(userApi.login, action.payload);
    // console.log("res---: ", res);
    yield put({ type: actionTypes.USER_LOGIN_SUCCEEDED, payload: res });
  } catch (error: any) {
    yield put({ type: actionTypes.USER_LOGIN_FAILED, message: error.message });
  }
}
