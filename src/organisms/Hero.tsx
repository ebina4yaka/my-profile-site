import { ReactElement } from 'react'
import Image from 'next/image'
import github from '../svg/github'
import SvgButton from '../atoms/SvgButton'

export default function Hero(): ReactElement {
  return (
    <div className="bg-pink-light dark:bg-pink-dark">
      <div className="lg:container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:py-6 text-center py-6">
          <Image
            className="rounded-full"
            src="/icon.jpg"
            alt="Icon"
            loading="eager"
            width={200}
            height={200}
          />
        </div>
        <div
          className="sm:box-content flex flex-col w-full lg:w-1/2 justify-center
                   items-start pt-12 pb-12 sm:pb-24 px-6"
        >
          <p className="uppercase tracking-loose">profile</p>
          <h1 className="font-bold text-3xl my-4">ebina4yaka</h1>
          <p className="leading-normal mb-4">
            I&apos;m frontend engineer and pokemon trainer.
          </p>
          <a
            href="https://github.com/ebina4yaka"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SvgButton svgPath={github}>Github</SvgButton>
          </a>
        </div>
      </div>
    </div>
  )
}
