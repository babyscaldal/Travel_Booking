import { actionTypes } from "../types/actions.types";
import { IUserLoginReq } from "../types/userType";

export function LoginRes(user: IUserLoginReq) {
  // console.log("user dispatch: ", user);
  return {
    type: actionTypes.USER_LOGIN_RES,
    payload: user,
  };
}

export function LogoutRes() {
  return {
    type: actionTypes.USER_LOGOUT_RES,
  };
}
