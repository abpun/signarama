import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDir = path.join(process.cwd(), "posts")

export type BlogType = {
  slug: string
  title: string
  date: string
  metaTitle?: string
  metaDescription?: string
  image?: string
  content: string
}

export function getAllBlogs(): {
  slug: string
  title: string
  date: string
  image?: string
}[] {
  const files = fs.readdirSync(postsDir)
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"))
    return { slug, title: data.title, date: data.date, image: data.image }
  })
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  const fullPath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"))
  const processedContent = await remark().use(html).process(content)

  return {
    slug,
    date: data.date,
    title: data.title,
    image: data.image || "",
    metaTitle: data.metaTitle || "",
    metaDescription: data.metaDescription || "",
    content: processedContent.toString(),
  }
}
