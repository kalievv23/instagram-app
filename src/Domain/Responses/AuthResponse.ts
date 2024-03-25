import type { UserAccount } from "../Models/UserAccount";

export interface AuthResponse {
  token: string;
  userAccount: UserAccount;
}
