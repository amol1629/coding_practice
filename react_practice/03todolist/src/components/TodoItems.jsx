import React, { useState } from "react";
import AddTodo from "./AddTodo";

const TodoItems = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  };

  const deleteTodos = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <AddTodo addTodos={addTodos} />

      <div className="mb-2 bg-pink-100 p-4 w-3/4 mx-auto rounded-3xl">
        {todos.length === 0 && (
          <p className="text-slate-600 italic text-center">
            There are no todos to display
          </p>
        )}

        <div className="max-h-80 overflow-y-auto">
          <ul className="w-full">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between my-4 px-8 place-content-between"
              >
                <div className="flex items-center bg-red-400 w-full">
                  <input
                    type="checkbox"
                    name="todoItem"
                    id={`todoItem-${todo.id}`}
                    className="rounded-3xl"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                  />
                  <p
                    className={`px-2 ${
                      todo.completed ? "italic line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.title}
                  </p>
                  {todo.completed && (
                    <span className="text-[10px] border border-green-400 rounded-xl px-1 bg-green-200 text-green-700 mb-4">
                      Completed
                    </span>
                  )}
                </div>
                <button
                  className="bg-red-700 text-white py-2 px-8 rounded-3xl font-semibold hover:bg-red-600"
                  onClick={() => deleteTodos(todo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
