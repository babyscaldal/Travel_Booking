import { axiosClient } from "./axiosClient";

const hotelsByLocationAPI = {
  getAll: () => {
    const url = "https://travel-booking-api-b3x7.onrender.com/provinces";
    return axiosClient.get(url);
  },

  getById: (id: number, roomValue: number) => {
    const url = `https://travel-booking-api-b3x7.onrender.com/provinces/${id}/hotels?numberOfRoom_gte=${roomValue}`;
    return axiosClient.get(url);
  },
};

export default hotelsByLocationAPI;
