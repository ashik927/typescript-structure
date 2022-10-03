import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./Components/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <>
      {/* <div className="App"> */}
        <span className="Heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {todos.map((t) => {
          return <li>{t.todo}</li>;
        })}
      {/* </div> */}
    </>
  );
};

export default App;
