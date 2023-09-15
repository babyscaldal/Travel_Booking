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
  // console.log(action.payload);
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

    case actionTypes.WATCH_FORM_VALUE:
      console.log("Tao đã Set lại value:", action);
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
