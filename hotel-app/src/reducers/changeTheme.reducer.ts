import { actionTypes } from "../types/actions.types";
import { IAction } from "./ProvincesReducer";

const darkMode = {
  isDark: false,
};

const darkModeReducer = (state = darkMode, action: IAction) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return { ...state, isDark: !state.isDark };

    default:
      return state;
  }
};

export default darkModeReducer;
