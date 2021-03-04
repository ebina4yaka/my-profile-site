import renderer from 'react-test-renderer'
import SvgButton from '../SvgButton'
import github from '../../svg/github'

it('Snapshot test for SvgButton', () => {
  const tree = renderer
    .create(<SvgButton svgPath={github}>Github</SvgButton>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
