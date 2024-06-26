import Header from "../../components/header"
import { ContentStyle, MainStyle } from "../common"

const data = [
  {
    university: {
      name: 'Bogazici University, Istanbul',
      url: 'https://www.cmpe.boun.edu.tr/',
    },
    degree: 'MS. Computer Science (3.80 / 4)',
    year: '2008 - 2010',
    content: <ul className="list-square mx-12">
      <li>Researched distributed systems, graph theory and network flows.</li>
      <li>{`Thesis titled "Parallel maximum flow solver for multi-core machines"`}.</li>
    </ul>,
  },
  {
    university: {
      name: 'Bogazici University, Istanbul',
      url: 'https://www.cmpe.boun.edu.tr/',
    },
    degree: 'BS. Computer Science (3.57 / 4)',
    year: '2003 - 2008',
    content: <ul className="list-square mx-12">
      <li>Studied wireless networks and computer vision in addition to the foundations of computer science.</li>
      <li>Graduated Cum Laude.</li>
    </ul>,
  }
]

export default function Education(props: any) {
  return (
    <main className={MainStyle}>
      <Header selected="education"/>
      <div className={ContentStyle}>
        <div className="grid grid-cols-1 gap-8 py-8">
          {data.map((job, idx) => (<EducationCard key={idx} {...job}/>))}
        </div>
      </div>
    </main>
  )
}

const EducationCard = (props: any) => (
  <div className="flex flex-col place-self-center w-full lg:w-1/2 bg-primary-0 dark:bg-secondary-1 dark:shadow-black shadow-sm rounded-sm shadow-secondary-1">
    <div className="p-8 grid grid-cols-2">
      <div>
        <p className="font-medium text:lg">
          <a href={props.university.url} target="_blank">
            {props.university.name}
          </a>
        </p>
        <p className="font-light italic py-4">
          {props.degree}
        </p>
      </div>
      <p className="p-4 lg:p-8 justify-self-end font-extralight text-sm content-center">{props.year}</p>
    </div>
    <div className="text-sm lg:text-base items-end pb-8">
      {props.content}
    </div>
  </div>
)
