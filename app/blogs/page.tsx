import Link from "next/link"
import Image from "next/image"
import { getAllBlogs } from "@/lib/posts"
import Spacer from "@/components/Spacer"

export const metadata = { title: "Blogs" }

export default function BlogPage() {
  const sortedPosts = getAllBlogs()

  console.log(sortedPosts.map((p) => p.date))
  return (
    <Spacer className="py-16 xl:max-w-5xl">
      <h1 className="mb-6 text-3xl font-bold">Blogs</h1>
      <ul className="grid grid-cols-3 gap-8">
        {sortedPosts.map((post) => (
          <li
            key={post.slug}
            className="overflow-hidden rounded-2xl border border-gray-500"
          >
            <Link href={`/blogs/${post.slug}/`} prefetch={false}>
              <Image
                src={post.image || "/placeholder.png"}
                alt={post.title}
                width={300}
                height={200}
              />
              <div className="px-4 py-5">
                <h2 className="text-lg">{post.title}</h2>
                <span className="text-sm text-gray-500">
                  ({post.date.toString()})
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Spacer>
  )
}
