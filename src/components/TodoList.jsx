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
            <>
              <input
                type="checkbox"
                name={t.text}
                id={`text-${t.id}`}
                checked={t.isDone}
                onChange={(e) => handleCheck(e, t.id)}
              />
              {t.text}
              <button onClick={() => handleDelete(t.id)}>Delete</button>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
