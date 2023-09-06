export interface IUserLoginReq {
  user: {
    email: string;
    password: string;
  };
}

export interface IUserLoginRes {
  user: {
    email: string;
    username: string;
    bio: any;
    image: string;
    token: string;
  };
}
