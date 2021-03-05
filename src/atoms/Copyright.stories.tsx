import { ReactElement } from 'react'
import Copyright from './Copyright'

export default {
  title: 'Copyright',
}

export const light = (): ReactElement => {
  document.documentElement.classList.remove('dark')
  return <Copyright />
}

export const dark = (): ReactElement => {
  document.documentElement.classList.add('dark')
  return <Copyright />
}
