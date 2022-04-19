export interface User {
  name: string;
  age: number;
  description: string;
  role: Role;
}

export enum Role {
  Admin,
  User
}