  import './App.css'
  import ThemeProvider from './contexts/theme/ThemeProvider'
  import UseContext from './hooks/usecontext/UseContext'

  function App() {
    return (
      <div>
        <ThemeProvider>
          <UseContext />
        </ThemeProvider>
      </div>
    )
  }

  export default App
