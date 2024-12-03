
import { useEffect, useRef, useState } from "react";
import { deleteTodo, listTodos, postTodo, updateTodo } from "../Api";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/logout");
  };

  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleInput = async () => {
    const text = inputRef.current.value.trim(); 

    if (!text) {
      alert("Please enter a valid note.");
      return;
    }

    const newItem = await postTodo(text, "none");
    setTodos([...todos, newItem]); 
    inputRef.current.value = "";
  };

  const handleClick = async (id, title, description, done) => {
    const updatedTodo = await updateTodo(id, title, description, done);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const handleDelete = async (id) => {
    await deleteTodo(id); 
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    listTodos().then((fetchedTodos) => {
      setTodos(fetchedTodos);
    });
  }, []);

  return (
    <>
      <button onClick={handleLogoutClick} className="logtodo">
        <i className="fa-solid fa-user"></i>
      </button>
      <div className="bady">
        <div className="App">
          <h2>TODO LIST</h2>
          <div className="to-do-container">
            <input
              className="inp1"
              ref={inputRef}
              type="text"
              placeholder="Add a new task..."
            />
            <button onClick={handleInput} className="but1">
              Add
            </button>

            <ul className="checkout">
              {todos.map(({ title, done, id, description }) => (
                <div className="item" key={id}>
                  <li className={done ? "done" : ""}>
                    <input
                      type="checkbox"
                      checked={done}
                      onChange={(e) =>
                        handleClick(id, title, description, e.target.checked)
                      }
                    />
                    {title}
                  </li>
                  <span onClick={() => handleDelete(id)}>
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
