import { useState } from "react";
import EditTodo from "./EditTodo";

const TodoList = ({
  todos,
  handleDelete,
  handleDone,
  handleEdit,
  handleUpdate,
  dragUpdate,
}) => {
  const [draggedTodo, setDraggedTodo] = useState(null);

  const handleDragStart = (todo) => {
    setDraggedTodo(todo);
    console.log("start");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("moving");
  };

  const handleDrop = (target) => {
    console.log("dropped");

    if (draggedTodo) {
      const updatedTodos = [...todos];

      const draggedIndex = updatedTodos.findIndex(
        (t) => t.id === draggedTodo.id
      );
      const targetIndex = updatedTodos.findIndex((t) => t.id === target.id);

      dragUpdate(draggedIndex, targetIndex, draggedTodo);
      setDraggedTodo(null);
    }
  };

  function handleCheck(e, id) {
    let type = "done";
    if (!e.target.checked) {
      type = "undone";
    }
    handleDone(id, type);
  }

  function handleSave(id, value) {
    if (!value) {
    }
    handleUpdate(id, value);
  }

  return (
    <div>
      {todos.map((t) => (
        <div
          key={t.id}
          draggable
          onDragStart={() => handleDragStart(t)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={() => handleDrop(t)}
        >
          {t.isEdit ? (
            <>
              <EditTodo item={t} handleSave={handleSave} />
            </>
          ) : (
            <div className="input-group-text justify-content-between mb-3 col-sm-6">
              <div>
                <input
                  type="checkbox"
                  name={t.text}
                  id={`text-${t.id}`}
                  checked={t.isDone}
                  onChange={(e) => handleCheck(e, t.id)}
                />
                <span
                  className="px-3"
                  style={t.isDone ? { textDecoration: "line-through" } : {}}
                >
                  {t.text}
                </span>
              </div>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary btn-sm mx-2"
                  onClick={() => handleDelete(t.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleEdit(t.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
