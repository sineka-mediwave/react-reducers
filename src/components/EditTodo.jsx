import { useState } from "react";

const EditTodo = (props) => {
  const { item, handleSave } = props;
  const [editValue, setEditValue] = useState(item.text);
  const handleChange = (e) => setEditValue(e.target.value);

  return (
    <>
      <input
        id={`text-${item.id}`}
        type="text"
        placeholder={item.text}
        value={editValue}
        onChange={handleChange}
      />
      <button onClick={() => handleSave(item.id, editValue)}>Update</button>
    </>
  );
};

export default EditTodo;
