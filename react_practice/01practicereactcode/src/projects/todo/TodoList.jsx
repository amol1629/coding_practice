import React from 'react'

const TodoList = ({ todoList, deleteTodo }) => {
	return (
		<div>
			<div>
				{todoList?.length >= 1 ? (
					<div>
						{todoList?.map((item, id) => (
							<div key={id} className="flex-div2">
								<p>
									<span>{item}</span>
								</p>
								<button
									className="delete-button"
									onClick={() => deleteTodo(id)}
								>
									Delete
								</button>
							</div>
						))}
					</div>
				) : (
					<p className="not-found">No Todo Found</p>
				)}
			</div>
		</div>
	)
}

export default TodoList
