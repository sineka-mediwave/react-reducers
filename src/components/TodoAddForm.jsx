import { useState } from "react";

const TodoAddForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [errorDiv, setErrorDiv] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (text.length < 5) {
      setErrorDiv(true);
    } else {
      setErrorDiv(false);
      handleAdd(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label>
        Enter Todo :
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          required
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
      {errorDiv ? (
        <div className="form-text text-muted">type atleast 5 characters</div>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default TodoAddForm;
