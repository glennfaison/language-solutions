import { HttpResource } from "./HttpResource";

export const AuthResource = {
  logIn: ({ email, password }) =>
    HttpResource.post('/auth/login', { email: email, password: password })
};