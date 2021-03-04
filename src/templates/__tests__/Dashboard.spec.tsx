import renderer from 'react-test-renderer'
import Dashboard from '../Dashboard'

jest.mock('../../organisms/Navbar', () => 'MockNavbar')
jest.mock('../../organisms/LanguagesChart', () => 'MockLanguagesChart')
jest.mock('../../atoms/Copyright', () => 'MockCopyright')

it('Snapshot test for Dashboard', () => {
  const tree = renderer.create(<Dashboard />).toJSON()
  expect(tree).toMatchSnapshot()
})
