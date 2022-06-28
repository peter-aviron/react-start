import React from "react";

function TodoList(props) {
  function mapCallback(item) {
    return <li key={item.id}>{item.label}</li>;
  }

  return <ul>{props.items.map(mapCallback)}</ul>;
}

export default TodoList;
