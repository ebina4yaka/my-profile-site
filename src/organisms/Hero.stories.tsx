import { ReactElement } from 'react'
import Hero from './Hero'

export default {
  title: 'Hero',
}

export const light = (): ReactElement => {
  document.documentElement.classList.remove('dark')
  return <Hero />
}

export const dark = (): ReactElement => {
  document.documentElement.classList.add('dark')
  return <Hero />
}
