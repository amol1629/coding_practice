import { useEffect, useMemo, useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	// Update <html> class when theme changes
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(theme === 'light' ? 'dark' : 'light')
		root.classList.add(theme)
	}, [theme])

	// Memoise the values passed i.e. theme and toggleTheme to avoid unnecessary re-renders
	const memoisedData = useMemo(() => ({ theme, toggleTheme }), [theme])

	return (
		<ThemeContext.Provider value={memoisedData}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
