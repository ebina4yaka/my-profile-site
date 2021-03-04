import renderer from 'react-test-renderer'
import { act, renderHook } from '@testing-library/react-hooks'
import LanguagesChart from '../LanguagesChart'
import useLanguages, { languagesContext } from '../../context/useLanguages'

it('Snapshot test for LanguagesChart', () => {
  const { result } = renderHook(() => useLanguages())
  const { setLanguages } = result.current
  act(() => {
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
  })

  const tree = renderer
    .create(
      <languagesContext.Provider value={result.current}>
        <LanguagesChart />
      </languagesContext.Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
