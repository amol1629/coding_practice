import './App.css'
import Todo from './projects/todo/Todo'

function App() {
	return (
		<div>
			<div>
				<h1 className="component-heading">Welcome to REACT JS</h1>
			</div>

			<div className="App">
				{/* <UseCallback /> */}
				{/* <UseEffect /> */}

				<Todo />
			</div>
		</div>
	)
}

export default App
