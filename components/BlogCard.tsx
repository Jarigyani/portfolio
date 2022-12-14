import Link from 'next/link'

type Props = {
  src: string
  alt: string
  title: string
  content: string
}
const BlogCard = ({ src, alt, title, content }: Props) => {
  return (
    <Link href={`/blog/${alt}`}>
      <div
        key={alt}
        className="image-full card h-60 w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          {/* <div className="card-actions justify-end"> */}
          <button className="btn-primary btn"> Read Now</button>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
