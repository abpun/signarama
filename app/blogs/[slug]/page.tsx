import { BlogType, getAllBlogs, getBlogBySlug } from "@/lib/posts"
import "./blog.css"

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((b) => ({ slug: b.slug }))
}

type Props = {
  params: { slug: string }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog: BlogType | null = await getBlogBySlug(slug)
  if (!blog) return <p>Blog not found</p>

  return (
    <div className="blog-container">
      <h1>{blog.title}</h1>
      <p className="text-sm">{blog.date.toString()}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  )
}
