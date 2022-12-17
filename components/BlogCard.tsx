import Image from 'next/image'
import Link from 'next/link'
import { Category } from 'types/types'

type Props = {
  eyecatch: { url: string; height: number; width: number }
  alt: string
  title: string
  description: string
  cats: Category[]
}
const BlogCard = ({ eyecatch, alt, title, description, cats }: Props) => {
  return (
    <Link href={`/blog/${alt}`}>
      <div className="card max-w-sm bg-base-100 shadow-xl transition-all hover:scale-105">
        <figure>
          <Image
            src={eyecatch.url}
            height={eyecatch.height}
            width={eyecatch.width}
            alt={alt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {cats.map((cat) => (
              <div key={cat.id} className="badge-outline badge">
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
    // <div className="mx-2 mb-4">
    //   <Link href={`/blog/${alt}`}>
    //     <div
    //       key={alt}
    //       className="image-full card mx-auto h-52 w-80 bg-base-100 shadow-md"
    //     >
    //       <figure>
    //         <Image
    //           src={eyecatch.url}
    //           width={eyecatch.width}
    //           height={eyecatch.height}
    //           alt={alt}
    //         />
    //       </figure>
    //       <div className="card-body h-52">
    //         <h2 className="card-title text-lg">{title}</h2>
    //         <p className="text-xs">{description}</p>
    //         {/* <div className="card-actions justify-end"> */}
    //         <button className="btn-primary btn bottom-3"> Read Now</button>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  )
}

export default BlogCard
