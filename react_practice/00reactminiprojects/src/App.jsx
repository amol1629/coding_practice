import './App.css'
import Form from './components/Form'
import ThemeProvider from './contexts/theme/ThemeProvider'

function App() {
	return (
		<div>
			<ThemeProvider>
				<Form />
				{/* <UseContext /> */}
			</ThemeProvider>
		</div>
	)
}

export default App
