import { ReactElement } from 'react'
import SvgButton from './SvgButton'
import github from '../svg/github'

export default {
  title: 'SvgButton',
}

export const showSvgButton = (): ReactElement => {
  return <SvgButton svgPath={github}>Github</SvgButton>
}
