import { actionTypes } from "../types/actions.types";
import { IUserLoginRes } from "../types/userType";

interface IActionProps {
  type?: string;
  payload?: any;
}

export interface UserState extends IUserLoginRes {
  isLoading: boolean;
}

const initState: UserState = {
  isLoading: false,
  user: {
    bio: null,
    email: "",
    token: "",
    image: "",
    username: "",
  },
};

const loginReducer = (state = initState, action: IActionProps) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCEEDED:
      console.log("action: ", action);
      return { isLoading: false, user: action.payload.user };
    default:
      return state;
  }
};

export default loginReducer;
