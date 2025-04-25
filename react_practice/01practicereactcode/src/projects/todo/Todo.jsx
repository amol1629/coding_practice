import React, { useState } from 'react'
import AddTodoButton from './AddTodoButton'
import Input from './Input'
import TodoList from './TodoList'

const Todo = () => {
	const [todoName, setTodoName] = useState('')

	const [todoList, setTodoList] = useState([])

	// This function is used to handle the change in the input field
	const handleChange = (e) => {
		setTodoName(e.target.value) // This updates the state
	}

	// This function is used to add a new todo item to the list
	const addTodo = () => {
		if (todoName.trim() === '') {
			alert('Please enter a todo item.')
			return
		}

		// Check if the todo item already exists in the list. First convert the todoList to lowercase and then check if the new todoName is already in the list.
		const lowerCaseTodoList = todoList.map((item) => item.toLowerCase())
		const lowerCaseTodoName = todoName.toLowerCase()
		if (lowerCaseTodoList.includes(lowerCaseTodoName)) {
			alert('Todo item already exists.')
			return
		}

		setTodoList([...todoList, todoName]) // This adds the new todo item to the list
		setTodoName('') // This clears the input field
	}

	// This function is used to delete a todo item from the list
	const deleteTodo = (id) => {
		const newTodoList = todoList.filter((item, index) => index !== id)
		setTodoList(newTodoList)
	}

	return (
		<div>
			<h1 className="main-heading">Todo List</h1>

			<div className="flex-div">
				<Input value={todoName} handleChange={handleChange} />
				<AddTodoButton addTodo={addTodo} />
			</div>

			<TodoList todoList={todoList} deleteTodo={deleteTodo} />
		</div>
	)
}

export default Todo
