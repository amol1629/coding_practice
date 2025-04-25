import TodoList from './components/todos/TodoList'

export default function App() {
	return (
		<>
			<div className="h-[10vh] bg-rose-100 rounded-xl border border-transparent shadow-xl  shadow-pink-100 p-4  hover:border hover:border-pink-600 hover:bg-rose-200 transition-all duration-300 ease-in-out">
				<h1 className="text-center text-rose-500">
					Practice React With Me
				</h1>
			</div>

			<div className="App flex justify-center items-center h-[90vh] text-center bg-pink-50">
				{/* This UseMemo component has two different components in it. One is WithUseMemo and other is WithoutUseMemo which gives you clear idea of how use memo works. */}
				{/* <UseMemo /> */}

				<TodoList />
			</div>
		</>
	)
}
