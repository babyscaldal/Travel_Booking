export interface IFormLoginValues {
  email: string;
  password: string;
}

export interface IFormRegisterValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface ILoginForm {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  users: IUser[];
}
