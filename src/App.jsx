import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Login } from "./pages/login";
import TodoPage from "./pages/TodoPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Forpass from "./pages/forpass";
import Logout from "./pages/logout";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/profile";
import { useCurrentUser } from "./context/AuthContext";

function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useCurrentUser();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/todo"
        element={
          <ProtectedRoute>
            <TodoPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forpass" element={<Forpass />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
