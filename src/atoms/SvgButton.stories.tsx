import { ReactElement } from 'react'
import SvgButton from './SvgButton'
import github from '../svg/github'

export default {
  title: 'SvgButton',
}

export const light = (): ReactElement => {
  document.documentElement.classList.remove('dark')
  return <SvgButton svgPath={github}>Github</SvgButton>
}

export const dark = (): ReactElement => {
  document.documentElement.classList.add('dark')
  return <SvgButton svgPath={github}>Github</SvgButton>
}
