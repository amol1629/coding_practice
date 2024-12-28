import React, { useState } from "react";

const TodoItemList = () => {
  const [todoList, setTodoList] = useState([
    {
      name: "India",
      isChecked: false,
    },

    {
      name: "Japan",
      isChecked: false,
    },

    {
      name: "Thailand",
      isChecked: false,
    },
  ]);

  /*******************************************
   * Function to toggle the todo item
   * @param {*} index : The index of todo item
   *******************************************/
    
  const handleTodoChecked = (index) => {
    todoList[index].isChecked = !todoList[index].isChecked;

    setTodoList([...todoList]);
  };

  /*********************************************** 
    Function to delete the Todo Items from list :
  *********************************************** */
  const handleDeleteTodo = (index) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  return (
    <div>
      <div className="bg-sky-100 p-4 ">
        <h1 className="text-3xl font-bold text-center">Todo List</h1>

        <div className="my-4">
          {todoList.map((item, index) => (
            <ul className="" key={index}>
              <div className="flex items-center justify-center  gap-4">
                <input
                  type="checkbox"
                  checked={item.isChecked}
                  onClick={() => handleTodoChecked(index)}
                />

                <li>{item.name}</li>

                <div>
                  {item.isChecked ? (
                    <button
                      className="cursor-pointer "
                      onClick={() => handleDeleteTodo(index)}
                    >
                      ❌
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoItemList;
