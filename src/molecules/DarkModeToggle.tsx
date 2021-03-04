import { ReactElement, useContext } from 'react'
import { darkModeContext } from '../context/useDarkMode'
import light from '../svg/light'
import dark from '../svg/dark'

export default function DarkModeToggle(): ReactElement {
  const context = useContext(darkModeContext)
  const { darkMode, setDarkMode } = context
  const handleChange = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  return (
    <div className="flex">
      <div className="mr-2 text-xs">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={light}
          />
        </svg>
      </div>
      <div
        className="relative inline-block w-10 mr-2 align-middle select-none
       transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={darkMode}
          className="toggle-checkbox"
          onChange={handleChange}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="toggle" className="toggle-label">
          toggle
        </label>
      </div>
      <div className="text-xs">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={dark}
          />
        </svg>
      </div>
    </div>
  )
}
