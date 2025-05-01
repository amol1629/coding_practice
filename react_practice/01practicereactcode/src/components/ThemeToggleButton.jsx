import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import Button from './ui/Button'

const ThemeToggleButton = () => {
	// Initialize theme based on system preference or localStorage
	const [theme, setTheme] = useState()

	return (
		<Button
			// onClick={toggleTheme}
			variant="ghost"
			className="flex items-center gap-2"
		>
			{theme === 'light' ? (
				<Moon className="w-5 h-5 text-gray-800 dark:text-gray-100" />
			) : (
				<Sun className="w-5 h-5 text-yellow-500" />
			)}
			<span className="text-sm font-medium text-gray-800 dark:text-gray-100">
				{theme === 'light' ? 'Dark Mode' : 'Light Mode'}
			</span>
		</Button>
	)
}

export default ThemeToggleButton
