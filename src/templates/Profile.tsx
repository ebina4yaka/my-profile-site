import { ReactElement } from 'react'
import Copyright from '../atoms/Copyright'
import Navbar from '../organisms/Navbar'
import LanguagesChart from '../organisms/LanguagesChart'
import Hero from '../organisms/Hero'

export default function Profile(): ReactElement {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="my-6 grid grid-cols-1 gap-6">
          <Hero />
          <LanguagesChart />
        </div>
      </main>
      <footer className="text-center">
        <Copyright />
      </footer>
    </>
  )
}
