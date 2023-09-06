import { IUserLoginReq, IUserLoginRes } from "../types/userType";
import axiosClient from "./axiosClient";

const userApi = {
  login: (body: IUserLoginReq): Promise<IUserLoginRes> => {
    const url = "users/login";
    return axiosClient.post(url, body);
  },
};

export default userApi;
