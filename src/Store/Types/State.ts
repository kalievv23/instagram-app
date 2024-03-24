import type { UserAccount } from "../../Domain/Models/UserAccount";

export interface AuthState {
  token: string;
  user: UserAccount | null;
  isAuthenticated: boolean;
}
