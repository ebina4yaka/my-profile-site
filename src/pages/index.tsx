import { ReactElement } from 'react'
import Head from 'next/head'
import Dashboard from '../templates/Dashboard'

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>App | Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </>
  )
}
