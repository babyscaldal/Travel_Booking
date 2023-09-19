import { axiosClient } from "./axiosClient";

const provincesAPI = {
  getAll: () => {
    const url = "https://travel-booking-api-b3x7.onrender.com/provinces";
    return axiosClient.get(url);
  },

  getById: (id: number) => {
    const url = `https://travel-booking-api-b3x7.onrender.com/provinces/${id}`;
    return axiosClient.get(url);
  },
};

export default provincesAPI;
