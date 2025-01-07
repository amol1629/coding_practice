import React, { useState } from "react";

const AddTodo = ({ addTodos }) => {
  const [newItem, setNewItem] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    addTodos(newItem);
    setNewItem("");
  };
  return (
    <div>
      <div className="">
        <form
          action=""
          onSubmit={handleAddTodo}
          className="flex items-center w-3/4 gap-4 px-8 py-4 mx-auto my-8 align-middle place-content-center rounded-3xl"
        >
          <input
            type="text"
            value={newItem}
            name="todoItem"
            id="todoItem"
            placeholder="Add your todo..."
            onChange={(e) => setNewItem(e.target.value)}
            className="w-full px-4 py-3 border border-pink-400 focus:bg-pink-50 outline-pink-400 rounded-3xl"
          />
          <button className="bg-[#f24464] text-green-50 py-2 px-8 rounded-3xl font-semibold hover:bg-[#f76a83]">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
