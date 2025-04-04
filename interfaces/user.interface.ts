export interface User {
    name: string;
    email: string;
    password: string;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: Omit<User, "password"> | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    message: string | null;
  }
 export interface SignupThunkInterface {
    message: string;
  }
  
export  interface LoginThunkInterface {
    token: string;
  }