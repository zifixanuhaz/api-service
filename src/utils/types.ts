// types.ts

export interface ApiServiceError {
  code: number;
  message: string;
}

export interface ApiServiceResponse<T> {
  data: T;
  error: ApiServiceError | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  id: number;
  name?: string;
  email?: string;
}

export interface DeleteUserRequest {
  id: number;
}

export interface GetUserRequest {
  id: number;
}

export interface ListUsersRequest {
  limit: number;
  offset: number;
}

export interface ListUsersResponse {
  users: User[];
  count: number;
}