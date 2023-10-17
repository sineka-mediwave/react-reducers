import "bootstrap/dist/css/bootstrap.css";
import { useReducer, useEffect } from "react";
import TodoAddForm from "./components/TodoAddForm";
import TodoList from "./components/TodoList";

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("My-Todos")) || [];
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, getFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("My-Todos", JSON.stringify(todos));
  }, [todos]);

  function todoReducer(todos, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...todos,
          {
            id: new Date().getTime(),
            text: action.value,
            isDone: false,
            isEdit: false,
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = todos.filter((t) => t.id != action.value);
        return [...filtered];
      }
      case "TODO_EDIT": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isEdit"] = true;
        }
        return newTodos;
      }
      case "TODO_UPDATE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value.id);
        if (idx !== -1) {
          newTodos[idx]["isEdit"] = false;
          newTodos[idx]["text"] = action.value.text;
        }
        return newTodos;
      }
      case "TODO_DONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = true;
        }
        return newTodos;
      }
      case "TODO_UNDONE": {
        const newTodos = [...todos];
        const idx = newTodos.findIndex((nt) => nt.id === action.value);
        if (idx !== -1) {
          newTodos[idx]["isDone"] = false;
        }
        return newTodos;
      }
      case "TODO_DRAG": {
        return action.value;
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  function handleAdd(value) {
    dispatch({
      type: "TODO_ADD",
      value: value,
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }
  function handleEdit(id) {
    dispatch({
      type: "TODO_EDIT",
      value: id,
    });
  }
  function handleUpdate(id, text) {
    dispatch({
      type: "TODO_UPDATE",
      value: { id, text },
    });
  }

  function dragUpdate(newTodos) {
    dispatch({
      type: "TODO_DRAG",
      value: newTodos,
    });
  }

  function handleDone(id, type) {
    if (type == "done") {
      dispatch({
        type: "TODO_DONE",
        value: id,
      });
    } else {
      dispatch({
        type: "TODO_UNDONE",
        value: id,
      });
    }
  }

  return (
    <div className="container-fluid">
      <h1 className="mb-4">My Todo App</h1>
      <TodoAddForm handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        dragUpdate={dragUpdate}
      />
    </div>
  );
}

export default App;
