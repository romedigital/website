import { getDocuments } from 'outstatic/server'


async function getData() {
  const posts = getDocuments('posts', ['title', "description", "author", "publishedAt"])

  return posts
}

export default async function AllBlogs() {
    const posts = await getData()
  return (
    posts.map((post) => <h1>{post.title} - {post.author?.name} - {post.description} - {post.publishedAt}</h1>)
  )
}
