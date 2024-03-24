interface AccountInformation {
  contentCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
  id: number;
}

export interface User {
  userName: string;
  accountInformation: AccountInformation;
  comments: null | any[];
  contents: any[];
  likeOfComments: null | any[];
  likeOfContents: null | any[];
  subscribers: any[];
  userEmail: string;
  userId: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

export interface RootState {
  auth: AuthState;
}
