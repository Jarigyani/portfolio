import Link from 'next/link'

type Props = {
  src: string
  alt: string
  title: string
  content: string
}
const BlogCard = ({ src, alt, title, content }: Props) => {
  return (
    <div key={alt} className="image-full card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">
            <Link href={`/blog/${alt}`}>Read Now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
