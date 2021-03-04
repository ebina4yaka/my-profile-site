import { ReactElement } from 'react'
import Head from 'next/head'
import Profile from '../templates/Profile'

export default function Projects(): ReactElement {
  return (
    <>
      <Head>
        <title>App | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Profile />
    </>
  )
}
