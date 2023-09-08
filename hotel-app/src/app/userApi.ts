<<<<<<< HEAD
import {
  IUserLoginReq,
  IUserLoginRes,
  IUserRegisterReq,
} from "../types/userType";
import axiosClient from "./axiosClient";
=======
import { IUserLoginReq, IUserLoginRes } from "../types/userType";
import { axiosClient } from "./axiosClient";
>>>>>>> features/SearchHotelList

const userApi = {
  login: (body: IUserLoginReq): Promise<IUserLoginRes> => {
    const url = "https://api.realworld.io/api/users/login";
    // const url = "https://api.storerestapi.com/auth/login";
    return axiosClient.post(url, body);
  },
  register: (body: IUserRegisterReq): Promise<IUserLoginRes> => {
    const url = "users";
    return axiosClient.post(url, body);
  },
};

export default userApi;
