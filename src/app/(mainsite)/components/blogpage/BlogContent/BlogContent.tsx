import styles from "./blogcontent.module.css"
import getBlog from "@/app/controllers/getBlog"

export default async function BlogContent(props: {slug: string}) {
    const postData = await getBlog(props.slug || "")
  return (
    <section className={styles.wrapper}>
        <div className={styles.content}>
            <img src={postData.coverImage} alt="Cover Image" className={styles.coverImg} />
            <h1>{postData.title}</h1>
            <h3>{postData.author?.name}, {new Date(`${postData.publishedAt}`).toDateString()}</h3>
            <div className={styles.blogContent} dangerouslySetInnerHTML={{__html: postData.content}}></div>
        </div>
    </section>
  )
}