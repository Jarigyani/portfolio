import Link from 'next/link'

type Props = {
  src: string
  alt: string
  title: string
  description: string
}
const BlogCard = ({ src, alt, title, description }: Props) => {
  return (
    <div className="mx-2 min-w-max">
      <Link href={`/blog/${alt}`}>
        <div
          key={alt}
          className="image-full card mx-auto h-60 w-96 bg-base-100 shadow-xl"
        >
          <figure>
            <img src={src} alt={alt} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            {/* <div className="card-actions justify-end"> */}
            <button className="btn-primary btn"> Read Now</button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
