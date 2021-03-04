import { ReactChild, ReactElement } from 'react'

type Props = {
  svgPath: string
  children: ReactChild
}

export default function SvgButton(props: Props): ReactElement {
  const { svgPath, children } = props
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-gray-900 text-gray-900 dark:text-white
           dark:hover:text-gray-900 dark:hover:bg-white
           hover:text-white rounded shadow hover:shadow-lg py-2 px-4
           border border-gray-900 dark:border-white hover:border-transparent"
    >
      <div className="flex">
        <svg
          className="w-6 h-6 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="currentColor"
        >
          <path d={svgPath} />
        </svg>
        {children}
      </div>
    </button>
  )
}
