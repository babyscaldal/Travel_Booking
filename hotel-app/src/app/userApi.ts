import {
  IUserLoginReq,
  IUserLoginRes,
  IUserRegisterReq,
} from "../types/userType";
import { axiosClient } from "./axiosClient";

const userApi = {
  login: (body: IUserLoginReq): Promise<IUserLoginRes> => {
    const url = "https://api.realworld.io/api/users/login";
    // const url = "https://api.storerestapi.com/auth/login";
    return axiosClient.post(url, body);
  },
  register: (body: IUserRegisterReq): Promise<IUserLoginRes> => {
    const url = "https://api.realworld.io/api/users";
    return axiosClient.post(url, body);
  },
};

export default userApi;
