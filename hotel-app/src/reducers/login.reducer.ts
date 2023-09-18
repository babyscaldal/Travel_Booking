import { actionTypes } from "../types/actions.types";
import { IUserLoginRes } from "../types/userType";

interface IActionProps {
  type?: string;
  payload?: any;
  message?: any;
}

export interface UserState extends IUserLoginRes {
  isLogin: boolean;
}

const initState: UserState = {
  isLogin: false,
  user: {
    bio: null,
    email: "",
    token: "",
    image: "",
    username: "",
  },
};

//Call data from localStorage
export function getUserFromLocal(): UserState {
  const res = localStorage.getItem("userLogin") as string;
  return JSON.parse(res) || initState;
}

const loginReducer = (state = getUserFromLocal(), action: IActionProps) => {
  switch (action.type) {
    // login succeeded
    case actionTypes.USER_LOGIN_SUCCEEDED:
      localStorage.setItem(
        "userLogin",
        JSON.stringify({ isLogin: true, user: action.payload.user })
      );
      return { isLogin: true, user: action.payload.user };

    // login failed
    case actionTypes.USER_LOGIN_FAILED:
      alert(`Tài khoản hoặc mật khẩu không chính xác (${action.message})`);
      return { ...state };

    // register succeeded
    case actionTypes.USER_REGISTER_SUCCEEDED:
      localStorage.setItem(
        "userLogin",
        JSON.stringify({ isLogin: true, user: action.payload.user })
      );
      return { isLogin: true, user: action.payload.user };

    // register failed
    case actionTypes.USER_REGISTER_FAILED:
      alert(`Tài khoản có thể đã tồn tại (${action.message})`);
      return { ...state };

    // logout
    case actionTypes.USER_LOGOUT_RES:
      // confirm("Logout hả!!!");
      localStorage.setItem(
        "userLogin",
        JSON.stringify({
          isLogin: false,
          user: {
            bio: null,
            email: "",
            token: "",
            image: "",
            username: "",
          },
        })
      );
      return {
        isLogin: false,
        user: {
          bio: null,
          email: "",
          token: "",
          image: "",
          username: "",
        },
      };
    default:
      return state;
  }
};

export default loginReducer;
