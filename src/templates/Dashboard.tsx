import { ReactElement } from 'react'
import Copyright from '../atoms/Copyright'
import Navbar from '../organisms/Navbar'
import LanguagesChart from '../organisms/LanguagesChart'

export default function Dashboard(): ReactElement {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="lg:container mx-auto">
          <div className="md:box-content">
            <div className="font-sans text-4xl text-center m-10">
              This is Title
            </div>
          </div>
        </div>
        <LanguagesChart />
      </main>
      <footer className="text-center">
        <Copyright />
      </footer>
    </>
  )
}
