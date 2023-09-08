import {
  IUserLoginReq,
  IUserLoginRes,
  IUserRegisterReq,
} from "../types/userType";
import axiosClient from "./axiosClient";

const userApi = {
  login: (body: IUserLoginReq): Promise<IUserLoginRes> => {
    const url = "users/login";
    return axiosClient.post(url, body);
  },
  register: (body: IUserRegisterReq): Promise<IUserLoginRes> => {
    const url = "users";
    return axiosClient.post(url, body);
  },
};

export default userApi;
