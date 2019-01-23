import { HttpResource } from "./HttpResource";

export const UsersResource = {
  all: () =>
    HttpResource.get(`/users`),
  del: id =>
    HttpResource.del(`/users/${id}`),
  get: id =>
    HttpResource.get(`/users/${id}`),
  update: (newUser) =>
    HttpResource.put(`/users/${newUser.id}`, { newUser: newUser }),
  create: user =>
    HttpResource.post('/users', { ...user })
};