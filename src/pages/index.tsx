import { ReactElement, useEffect } from 'react'
import Head from 'next/head'
import HttpsProxyAgent from 'https-proxy-agent/dist/agent'
import Dashboard from '../templates/Dashboard'
import { Language } from '../lib/models'
import useLanguages, { languagesContext } from '../context/useLanguages'

type Props = {
  languages: Language[]
}

export default function Index(props: Props): ReactElement {
  const { languages } = props
  const context = useLanguages()
  const { setLanguages } = context
  useEffect(() => {
    setLanguages(languages)
  }, [])
  return (
    <languagesContext.Provider value={context}>
      <Head>
        <title>ebina4yaka | Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </languagesContext.Provider>
  )
}

export async function getStaticProps(): Promise<{
  revalidate: number
  props: Props
}> {
  const options = {
    agent: process.env.HTTP_PROXY
      ? new HttpsProxyAgent(process.env.HTTP_PROXY)
      : null,
  } as RequestInit

  const res = await fetch(
    'https://github-user-languages-api.herokuapp.com/user/ebina4yaka' +
      '?limit=6&hide=css,vim%20script,PLpgSQL,makefile,shell,javascript,dockerfile',
    options
  )
  const languages: Language[] = await res.json()

  return {
    props: {
      languages,
    },
    revalidate: 86400,
  }
}
