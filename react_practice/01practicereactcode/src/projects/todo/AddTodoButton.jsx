import React from 'react'

const AddTodoButton = ({ addTodo }) => {
	return (
		<div>
			<button onClick={addTodo} className="add-todo-btn">
				Add Todo
			</button>
		</div>
	)
}

export default AddTodoButton
