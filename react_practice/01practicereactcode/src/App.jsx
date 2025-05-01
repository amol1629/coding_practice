import { Toaster } from 'react-hot-toast'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import UseContext from './hooks/usecontext/UseContext'

function App() {
	return (
		<div>
			<Toaster position="top-right" />
			<div>
				<h1 className="component-heading">Welcome to REACT JS</h1>
			</div>

			<div className="App">
				{/* <UseCallback /> */}
				{/* <UseEffect /> */}

				{/* <Todo /> */}
				<UserContextProvider>
					<UseContext />
				</UserContextProvider>
			</div>
		</div>
	)
}

export default App
