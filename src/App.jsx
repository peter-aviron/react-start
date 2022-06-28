import React from "react";
import TodoList from "./TodoList";

function App() {
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState("");

  function handleClick() {
    if (text.length === 0) {
      return;
    }
    const newItem = {
      label: text,
      id: items.length,
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <label>What needs to be done?</label>
      <input onChange={handleChange} value={text} />
      <button onClick={handleClick}>Add #{items.length + 1} todo</button>
    </div>
  );
}

export default App;
