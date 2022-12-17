import { Category } from 'types/types'

type Props = {
  categories: Category[]
  toc: { text: string; id: string; name: string }[]
}
const Mokuji = ({ categories, toc }: Props) => {
  const handleOnClick = (id: string) => {
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const handleOnClickTop = () => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="hidden lg:block">
      <div className="mb-5 h-max w-72 rounded-xl bg-base-200 p-5 shadow-md">
        <p className="mb-3 text-xl">Categories</p>
        {categories.map((cat) => {
          return (
            <div key={cat.id} className="badge mr-2">
              {cat.name}
            </div>
          )
        })}
      </div>
      <div className="sticky top-20 h-max w-72 rounded-xl bg-base-200 p-5 shadow-md">
        <div className="mb-5 flex justify-between" onClick={handleOnClickTop}>
          <button className="text-xl">👻 List of contents</button>
        </div>
        <ul className="ml-4 list-disc">
          {toc.map((toc) => {
            if (toc.name === 'h1') {
              return (
                <li
                  key={toc.id}
                  onClick={() => handleOnClick(toc.id)}
                  className="text-md mb-1"
                >
                  <button>{toc.text}</button>
                </li>
              )
            }
            return (
              <ul
                key={toc.id}
                onClick={() => handleOnClick(toc.id)}
                className="ml-2 list-disc"
              >
                <li className="mb-1 text-sm opacity-70">
                  <button>{toc.text}</button>
                </li>
              </ul>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Mokuji
