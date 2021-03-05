import { ReactElement, useEffect } from 'react'
import LanguagesChart from './LanguagesChart'
import useLanguages, { languagesContext } from '../context/useLanguages'

export default {
  title: 'LanguagesChart',
}

const languages = [
  {
    name: 'Rust',
    color: '#dea584',
    percentage: 25,
  },
  {
    name: 'Go',
    color: '#00ADD8',
    percentage: 25,
  },
  {
    name: 'Dart',
    color: '#00B4AB',
    percentage: 25,
  },
  {
    name: 'Python',
    color: '#3572A5',
    percentage: 25,
  },
]

export const light = (): ReactElement => {
  const context = useLanguages()
  const { setLanguages } = context
  useEffect(() => {
    setLanguages(languages)
  }, [])

  document.documentElement.classList.remove('dark')

  return (
    <languagesContext.Provider value={context}>
      <LanguagesChart />
    </languagesContext.Provider>
  )
}

export const dark = (): ReactElement => {
  const context = useLanguages()
  const { setLanguages } = context
  useEffect(() => {
    setLanguages(languages)
  }, [])

  document.documentElement.classList.add('dark')

  return (
    <languagesContext.Provider value={context}>
      <LanguagesChart />
    </languagesContext.Provider>
  )
}
