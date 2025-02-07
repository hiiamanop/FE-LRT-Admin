import { LoginRequest, LoginResponse } from "@/types/auth";

// lib/auth.ts
export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await fetch("http://your-api-url/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to login");
  }

  return response.json();
};

// Utility function to set auth token
export const setAuthToken = (token: string) => {
  localStorage.setItem("auth_token", token);
};

// Utility function to get auth token
export const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("auth_token");
  }
  return null;
};

// Utility function to remove auth token (logout)
export const removeAuthToken = () => {
  localStorage.removeItem("auth_token");
};
