import styles from "./allblogs.module.css"
import BlogCard from "../BlogCard/BlogCard";
import getBlogs from "@/app/controllers/getBlogs";
import { getDocumentSlugs } from "outstatic/server";

export async function generateStaticParams() {
  const posts = getDocumentSlugs('posts')
  return posts.map((slug) => ({ slug }))
}

export default async function AllBlogs() {
    const blogs = getBlogs()

    const blogElems = blogs.map((data, i)=>{
      return <BlogCard key={i} {...data} />
    })

    return(
      <>
        <div className={styles.bannerWrapper}>
          <h1 className={styles.bannerTitle}>Blog</h1>
          <img src="./img/blog-banner.png" alt="blog banner" className={styles.banner} />
        </div>
        <section className={styles.blogWrapper}>
          {blogElems}
        </section>
      </>
    )
}
