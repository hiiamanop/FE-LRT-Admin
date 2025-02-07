// types/auth.ts
export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserResponse {
  username: string;
  fullname: string;
  email: string;
  password_changed_at: string;
  created_at: string;
}

export interface LoginResponse {
  access_token: string;
  user: UserResponse;
}
