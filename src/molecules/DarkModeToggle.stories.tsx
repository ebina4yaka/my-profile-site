import { ReactElement, useEffect } from 'react'
import DarkModeToggle from './DarkModeToggle'
import useDarkMode, { darkModeContext } from '../context/useDarkMode'

export default {
  title: 'DarkModeToggle',
}

export const light = (): ReactElement => {
  const context = useDarkMode()
  const { setDarkMode } = context
  useEffect(() => {
    setDarkMode(false)
  }, [])
  document.documentElement.classList.remove('dark')
  return (
    <darkModeContext.Provider value={context}>
      <DarkModeToggle />
    </darkModeContext.Provider>
  )
}

export const dark = (): ReactElement => {
  const context = useDarkMode()
  const { setDarkMode } = context
  useEffect(() => {
    setDarkMode(true)
  }, [])
  document.documentElement.classList.add('dark')
  return (
    <darkModeContext.Provider value={context}>
      <DarkModeToggle />
    </darkModeContext.Provider>
  )
}
