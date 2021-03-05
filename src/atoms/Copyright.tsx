import { ReactElement } from 'react'

export default function Copyright(): ReactElement {
  return (
    <div className="font-sans text-base py-4">
      {'Copyright © '}
      <a
        href="https://github.com/ebina4yaka"
        target="_blank"
        rel="noreferrer noopener"
      >
        ebina4yaka
      </a>
      {` ${new Date(Date.now()).getFullYear()}.`}
    </div>
  )
}
