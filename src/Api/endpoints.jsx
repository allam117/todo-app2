export const baseUrl = "http://localhost:3000";

export const endpoints = {
  login: {
    method: "POST",
    endpoint: "/api/auth/login",
    auth: false,
  },

  listTodos: {
    method: "GET",
    endpoint: "/api/todos",
    auth: true,
  },
};
