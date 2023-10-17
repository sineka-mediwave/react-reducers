import EditTodo from "./EditTodo";

const TodoList = ({
  todos,
  handleDelete,
  handleDone,
  handleEdit,
  handleUpdate,
}) => {
  function handleCheck(e, id) {
    let type = "done";
    if (!e.target.checked) {
      type = "undone";
    }
    handleDone(id, type);
  }

  function handleSave(id, value) {
    handleUpdate(id, value);
  }

  return (
    <div>
      {todos.map((t) => (
        <div key={t.id}>
          {t.isEdit ? (
            <>
              <EditTodo item={t} handleSave={handleSave} />
            </>
          ) : (
            <div className="input-group-text justify-content-between mb-3">
              <div>
                <input
                  type="checkbox"
                  name={t.text}
                  id={`text-${t.id}`}
                  checked={t.isDone}
                  onChange={(e) => handleCheck(e, t.id)}
                />
                <span
                  style={t.isDone ? { textDecoration: "line-through" } : {}}
                >
                  {t.text}
                </span>
              </div>
              <div class="input-group-append">
                <button
                  className="btn btn-outline-secondary btn-sm"
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
