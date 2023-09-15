import { actionTypes } from "../types/actions.types";
import { IProvince } from "../types/provinceType";

export interface IAction {
  type: string;
  payload?: IProvince[];
}

export function getSelectedProvince(): IProvince {
  const res = localStorage.getItem("selectedProvince") as string;
  return JSON.parse(res) || {};
}

const INITIAL_STATE = {
  listProvinces: [],
  selectedProvince: getSelectedProvince(),
};

const provincesReducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case actionTypes.GET_PROVINCE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case actionTypes.GET_PROVINCE_SUCCESS:
      return {
        ...state,
        listProvinces: action.payload,
        isLoading: false,
        isError: false,
      };

    case actionTypes.GET_PROVINCE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionTypes.WATCH_FORM_VALUE:
      localStorage.setItem(
        "selectedProvince",
        JSON.stringify({ ...action.payload })
      );
      return {
        ...state,
        selectedProvince: { ...action.payload },
      };

    default:
      return state;
  }
};

export default provincesReducer;
