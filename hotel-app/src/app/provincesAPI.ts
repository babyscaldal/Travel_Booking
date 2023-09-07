import { axiosClient } from "./axiosClient";

const provincesAPI = {
  getAll: () => {
    const url = "http://localhost:3000/provinces";
    return axiosClient.get(url);
  },

  getById: (id: number) => {
    const url = `http://localhost:3000/provinces/${id}`;
    return axiosClient.get(url);
  },
};

export default provincesAPI;
