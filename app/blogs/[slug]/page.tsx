import { BlogType, getAllBlogs, getBlogBySlug } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import "./blog.css"
import ReadingProgress from "@/components/ReadingProgress"

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((b) => ({ slug: b.slug }))
}

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const blog: BlogType | null = await getBlogBySlug(slug)
  if (!blog) return { title: "Blog Not Found" }

  const baseUrl = "https://signaramawetherillpark.com.au/"

  return {
    metadataBase: new URL(baseUrl),
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || "",
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      images: [blog.image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || "",
      images: [blog.image],
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params
  const blog: BlogType | null = await getBlogBySlug(slug)
  if (!blog) return <p>Blog not found</p>

  return (
    <>
      <ReadingProgress />
      <div className="blog-container">
        <p className="text-sm!">{formatDate(blog.date)}</p>
        <h1>{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </>
  )
}
