import { ReactElement, useEffect } from 'react'
import LanguagesChart from './LanguagesChart'
import useLanguages, { languagesContext } from '../context/useLanguages'

export default {
  title: 'LanguagesChart',
}

export const showLanguagesChart = (): ReactElement => {
  const context = useLanguages()
  const { setLanguages } = context
  useEffect(() => {
    setLanguages([
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
    ])
  }, [])

  return (
    <languagesContext.Provider value={context}>
      <LanguagesChart />
    </languagesContext.Provider>
  )
}
