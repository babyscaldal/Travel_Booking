import { actionTypes } from "../types/actions.types";
import { IProvince } from "../types/provinceType";

export interface IAction {
  type: string;
  payload?: IProvince[];
}

const INITIAL_STATE = {
  listProvinces: [],
};

const provincesReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case actionTypes.GET_PROVINCE_REQUEST:
      // console.log("FETCH_USERS_REQUEST:", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_PROVINCE_SUCCESS:
      // console.log("FETCH_USERS_SUCCESS:", action);

      return {
        ...state,
        listProvinces: action.payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_PROVINCE_ERROR:
      // console.log("FETCH_USERS_ERROR:", action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default provincesReducer;
