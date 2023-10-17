const DisplayTodo = () => {
  return (
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
  );
};
