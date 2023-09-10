import { AxiosResponse } from "axios";
import hotelsByLocationAPI from "../app/hotelsByLocationAPI";
import { actionTypes } from "../types/actions.types";
import { IHotel } from "../types/hotelType";

export const getHotelsByLocationRequest = () => {
  return { type: actionTypes.GET_HOTELS_BY_LOCATION_REQUEST };
};
export const getHotelsByLocationSuccess = (data: AxiosResponse<IHotel[]>) => {
  return { type: actionTypes.GET_HOTELS_BY_LOCATION_SUCCESS, payload: data };
};
export const getHotelsByLocationError = () => {
  return { type: actionTypes.GET_HOTELS_BY_LOCATION_ERROR };
};

export const getAllHotelsByLocation = (id: number): any => {
  return async (dispatch: any) => {
    dispatch(getHotelsByLocationRequest());
    try {
      const data: AxiosResponse<IHotel[]> = await hotelsByLocationAPI.getById(
        id
      );
      dispatch(getHotelsByLocationSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(getHotelsByLocationError());
    }
  };
};
