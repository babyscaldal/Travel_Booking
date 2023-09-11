import { axiosClient } from "./axiosClient";

const hotelsByLocationAPI = {
  getAll: () => {
    const url = "http://localhost:3000/provinces";
    return axiosClient.get(url);
  },

  getById: (id: number, roomValue: number) => {
    const url = `http://localhost:3000/provinces/${id}/hotels?numberOfRoom_gte=${roomValue}`;
    return axiosClient.get(url);
  },
};

export default hotelsByLocationAPI;
