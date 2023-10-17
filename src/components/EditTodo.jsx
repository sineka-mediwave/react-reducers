import { useState } from "react";

const EditTodo = (props) => {
  const { item, handleSave } = props;
  const [editValue, setEditValue] = useState(item.text);
  const handleChange = (e) => {
    setEditValue(e.target.value);
  };
  return (
    <>
      <form
        className="input-group-text col-sm-6"
        onSubmit={() => handleSave(item.id, editValue)}
      >
        <input
          id={`text-${item.id}`}
          minLength="5"
          type="text"
          placeholder={item.text}
          value={editValue}
          onChange={handleChange}
          required
        />
        <button className="btn btn-outline-secondary btn-sm">Update</button>
      </form>
    </>
  );
};

export default EditTodo;
