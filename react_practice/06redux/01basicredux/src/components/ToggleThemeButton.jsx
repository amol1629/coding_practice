import { Moon, Sun } from 'lucide-react'

import useTheme from '../contexts/theme/useTheme'
import Button from './ui/Button'

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			onClick={toggleTheme}
			variant="outline"
			className="flex items-center gap-2 dark:bg-black"
			aria-label="Toggle theme"
			title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
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
