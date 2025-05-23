import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function useTheme() {
	let context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}

	return context
}
