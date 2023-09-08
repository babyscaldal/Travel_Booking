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

const loginReducer = (state = initState, action: IActionProps) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCEEDED:
      // console.log("action: ", action);
      alert(`Đăng nhập thành công`);
      return { isLogin: true, user: action.payload.user };
    case actionTypes.USER_LOGIN_FAILED:
      // console.log("aloho", action);
      // alert(`Tài khoảng hoặc mật khẩu không chính xác`);
      alert(`Tài khoảng hoặc mật khẩu không chính xác (${action.message})`);
      return { ...state };
    case actionTypes.USER_REGISTER_SUCCEEDED:
      // console.log("action: ", action);
      alert(`Đăng ký thành công`);
      return { isLogin: true, user: action.payload.user };
    case actionTypes.USER_REGISTER_FAILED:
      // console.log("aloho", action);
      // alert(`Tài khoảng hoặc mật khẩu không chính xác`);
      alert(`Tài khoảng hoặc mật khẩu không chính xác (${action.message})`);
      return { ...state };
    default:
      return state;
  }
};

export default loginReducer;
