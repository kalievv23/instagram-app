export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}

export interface RootState {
    auth: AuthState;
}