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
    case actionTypes.USER_LOGIN_SUCCEEDED:
      // console.log("action: ", action);
      // alert(`Đăng nhập thành công`);
      localStorage.setItem(
        "userLogin",
        JSON.stringify({ isLogin: true, user: action.payload.user })
      );
      return { isLogin: true, user: action.payload.user };
    case actionTypes.USER_LOGIN_FAILED:
      // console.log("aloho", action);
      // alert(`Tài khoảng hoặc mật khẩu không chính xác`);
      alert(`Tài khoản hoặc mật khẩu không chính xác (${action.message})`);
      return { ...state };
    case actionTypes.USER_REGISTER_SUCCEEDED:
      // console.log("action: ", action);
      // alert(`Đăng ký thành công`);
      localStorage.setItem(
        "userLogin",
        JSON.stringify({ isLogin: true, user: action.payload.user })
      );
      return { isLogin: true, user: action.payload.user };
    case actionTypes.USER_REGISTER_FAILED:
      // console.log("aloho", action);
      // alert(`Tài khoảng hoặc mật khẩu không chính xác`);
      alert(`Tài khoản có thể đã tồn tại (${action.message})`);
      return { ...state };
    default:
      return state;
  }
};

export default loginReducer;
