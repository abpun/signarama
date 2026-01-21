import Link from "next/link"
import Image from "next/image"
import { getAllBlogs } from "@/lib/posts"
import Spacer from "@/components/Spacer"

export const metadata = { title: "Blogs" }

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export default function BlogPage() {
  const sortedPosts = getAllBlogs()

  return (
    <Spacer className="py-16 xl:max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Blogs</h1>
        <p className="mt-2 text-gray-600">Thoughts and insights</p>
      </div>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <li className="group" key={post.slug}>
            <Link href={`/blogs/${post.slug}/`} prefetch={false}>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-lg">
                <div className="relative flex h-48 items-center bg-gray-100">
                  <Image
                    alt={post.title}
                    width={500}
                    height={200}
                    // className="object-cover"
                    src={post.image || "/posts/placeholder.png"}
                  />
                </div>
                <div className="p-4">
                  <h2 className="line-clamp-2 text-lg leading-6 font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <time className="mt-2 block text-sm text-gray-400">
                    {formatDate(post.date)}
                  </time>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Spacer>
  )
}
