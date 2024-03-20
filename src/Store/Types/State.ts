// export interface User {
//   userName: string;
//   accountInformation: object;
//   comments: [];
//   contents: object;
//   likeOfComments: null | number;
//   likeOfContents: null | number;
//   subscribers: [];
//   userEmail: string;
//   userId: string;
//   password: string;
// }

export interface AuthState {
  token: string | null;
  user: object | null;
  isAuthenticated: boolean;
}

export interface RootState {
  auth: AuthState;
}
