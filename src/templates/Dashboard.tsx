import { ReactElement } from 'react'
import Copyright from '../atoms/Copyright'
import Navbar from '../organisms/Navbar'
import LanguagesChart from '../organisms/LanguagesChart'
import Hero from '../organisms/Hero'

export default function Dashboard(): ReactElement {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <LanguagesChart />
      </main>
      <footer className="text-center">
        <Copyright />
      </footer>
    </>
  )
}
