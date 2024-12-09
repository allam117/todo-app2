export const login = async (email, password) => {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();

  if (res.status >= 400) {
    throw new Error(data.message);
  }

  localStorage.setItem("token", data.accessToken);
  return data;
};

export const logout = async () => {
  const res = await fetch("http://localhost:3000/api/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (res.status >= 400) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }

  localStorage.removeItem("token");

  return { message: "Logged out successfully" };
};

export const register = async (email, password, firstName, lastName) => {
  const register = await fetch("http://localhost:3000/api/auth/register", {
    method: "post",
    body: JSON.stringify({ email, password, firstName, lastName }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const dataRegister = await register.json();

  if (register.status >= 400) {
    throw new Error(dataRegister.message);
  }
  localStorage.setItem("token", dataRegister.accessToken);
  return dataRegister;
};

export const listTodos = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const postTodo = async (title, description) => {
  try {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (id, title, description, done) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        done,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "delete",

      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw "Please log in";
  }

  const res = await fetch("http://localhost:3000/api/users/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  if (res.status >= 400) {
    throw new Error("Failed to fetch profile data");
  }

  return await res.json();
};
