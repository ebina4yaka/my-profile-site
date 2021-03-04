import { ReactElement, useContext } from 'react'
import { Cell, Pie, PieChart } from 'recharts'
import { languagesContext } from '../context/useLanguages'

export default function LanguagesChart(): ReactElement {
  const { languages } = useContext(languagesContext)
  return (
    <div className="lg:container mx-auto">
      <div className="sm:box-content pb-4 pt-4">
        <div className="font-sans text-3xl text-center mb-2">
          Languages Chart
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center content-center pr-4 pl-4">
          <PieChart id="userLanguages" width={180} height={180}>
            <Pie
              data={languages}
              dataKey="percentage"
              nameKey="name"
              cx="50%"
              cy="50%"
            >
              {languages.map((language) => (
                <Cell
                  key={`cells-${language.name}`}
                  fill={language.color}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="flex flex-col flex-wrap justify-center content-center">
            {languages.map((language) => {
              return (
                <div
                  key={language.name}
                  className="flex flex-row justify-start items-center"
                >
                  <span
                    className="h-3 w-3 rounded-full inline-block mr-1 mt-0.5"
                    style={{ backgroundColor: language.color }}
                  />
                  <span className="text-base font-mono">
                    {`${language.name} ${language.percentage}%`}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
