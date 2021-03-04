import { createContext, useCallback, useState } from 'react'
import { Language } from '../lib/models'

export type LanguagesContext = {
  languages: Language[]
  setLanguages: (languages: Language[]) => void
}

const defaultContext: LanguagesContext = {
  languages: [],
  setLanguages: () => {},
}

export const languagesContext = createContext<LanguagesContext>(defaultContext)

export default function useLanguages(): LanguagesContext {
  const [languages, setLanguagesState] = useState<Language[]>([])
  const setLanguages = useCallback(
    (current: Language[]): void => setLanguagesState(current),
    []
  )

  return { languages, setLanguages }
}
