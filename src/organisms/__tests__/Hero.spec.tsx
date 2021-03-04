import renderer from 'react-test-renderer'
import Hero from '../Hero'

jest.mock('../../atoms/SvgButton', () => 'MockSvgButton')

it('Snapshot test for Hero', () => {
  const tree = renderer.create(<Hero />).toJSON()
  expect(tree).toMatchSnapshot()
})
