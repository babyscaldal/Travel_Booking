import { actionTypes } from "../types/actions.types";
import { IUserRegisterReq } from "../types/userType";

export function RegisterRes(user: IUserRegisterReq) {
  return {
    type: actionTypes.USER_REGISTER_RES,
    payload: user,
  };
}
