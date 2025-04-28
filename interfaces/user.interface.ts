export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  image?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Omit<User, "password"> | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  message: string | null;
  allUsers: User[];
}
export interface SignupThunkInterface {
  message: string;
}

export interface LoginThunkInterface {
  token: string;
}
