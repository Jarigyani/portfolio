import Image from 'next/image'
import Link from 'next/link'

type Props = {
  eyecatch: { url: string; height: number; width: number }
  alt: string
  title: string
  description: string
}
const BlogCard = ({ eyecatch, alt, title, description }: Props) => {
  return (
    <div className="mx-2 mb-4">
      <Link href={`/blog/${alt}`}>
        <div
          key={alt}
          className="image-full card mx-auto h-52 w-80 bg-base-100 shadow-xl"
        >
          <figure>
            <Image
              src={eyecatch.url}
              width={eyecatch.width}
              height={eyecatch.height}
              alt={alt}
            />
          </figure>
          <div className="card-body h-52">
            <h2 className="card-title text-lg">{title}</h2>
            <p className="text-xs">{description}</p>
            {/* <div className="card-actions justify-end"> */}
            <button className="btn-primary btn bottom-3"> Read Now</button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
