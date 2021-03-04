import renderer from 'react-test-renderer'
import Profile from '../Profile'

jest.mock('../../organisms/Navbar', () => 'MockNavbar')
jest.mock('../../organisms/Hero', () => 'MockHero')
jest.mock('../../organisms/LanguagesChart', () => 'MockLanguagesChart')
jest.mock('../../atoms/Copyright', () => 'MockCopyright')

it('Snapshot test for Profile', () => {
  const tree = renderer.create(<Profile />).toJSON()
  expect(tree).toMatchSnapshot()
})
