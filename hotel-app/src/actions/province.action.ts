import { actionTypes } from "../types/actions.types";
import provincesAPI from "../app/provincesAPI";
import { IProvince } from "../types/provinceType";

//start doing finish
export const fetchUsersRequest = () => {
  return {
    type: actionTypes.GET_PROVINCE_REQUEST,
  };
};

export const fetchUsersSuccess = (data: IProvince[]) => {
  return {
    type: actionTypes.GET_PROVINCE_SUCCESS,
    payload: data,
  };
};
export const fetchUsersError = () => {
  return {
    type: actionTypes.GET_PROVINCE_ERROR,
  };
};

export const fetchAllProvince = (): any => {
  return async (dispatch: any) => {
    dispatch(fetchUsersRequest());
    try {
      const data: any = await provincesAPI.getAll();

      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUsersError());
    }
  };
};
