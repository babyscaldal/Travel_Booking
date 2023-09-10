import { axiosClient } from "./axiosClient";

const hotelsByLocationAPI = {
  getAll: () => {
    const url = "http://localhost:3000/provinces";
    return axiosClient.get(url);
  },

  getById: (id: number) => {
    const url = `http://localhost:3000/provinces/${id}/hotels`;
    return axiosClient.get(url);
  },
};

export default hotelsByLocationAPI;
