import { useState } from "react";

const EditTodo = (props) => {
  const { item, handleSave } = props;
  const [editValue, setEditValue] = useState(item.text);
  const handleChange = (e) => setEditValue(e.target.value);

  return (
    <>
      <div className="input-group-text">
        <input
          id={`text-${item.id}`}
          type="text"
          placeholder={item.text}
          value={editValue}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => handleSave(item.id, editValue)}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default EditTodo;
