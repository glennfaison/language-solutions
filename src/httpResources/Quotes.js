import { HttpResource } from "./HttpResource";

export const QuotesResource = {
  all: () =>
    HttpResource.get(`/quotes`),
  byAuthor: authorId =>
    HttpResource.get(`/users/${authorId}/quotes`),
  del: id =>
    HttpResource.del(`/quotes/${id}`),
  get: id =>
    HttpResource.get(`/quotes/${id}`),
  update: (newQuote) =>
    HttpResource.put(`/quotes/${newQuote.id}`, { newQuote: newQuote }),
  create: quote =>
    HttpResource.post('/quotes', { quote })
};