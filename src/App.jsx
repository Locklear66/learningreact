import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function hideModal() {
    setShowModal(!true);
  }

  function onTodoDelete() {
    setShowModal(true);
  }

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Fontend Simplified" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish the Interview Section"
        />
        <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job" />
        <Counter />
      </div>
      {showModal ? <Modal hideModal={hideModal} title="Are you sure?" /> : null}
    </div>
  );
}

export default App;
