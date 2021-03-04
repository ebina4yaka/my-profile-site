import { ReactElement } from 'react'
import Head from 'next/head'
import Profile from '../templates/Profile'

export default function Calendar(): ReactElement {
  return (
    <>
      <Head>
        <title>App | Calendar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Profile />
    </>
  )
}
