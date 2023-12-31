// "use client"
import Link from 'next/link'
import React from 'react'
import styles from "./blogcard.module.css"
interface cardProps{
  title?: string,
  slug: string,
  description?: string,
  publishedAt?: string,
  author?: any,
  coverImage?: string
}
export default function BlogCard(props: cardProps) {
  return (
    <div className={styles.card}>
      <img src={props.coverImage} alt="Cover Image" className={styles.coverImg} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link href={`/blog/${props.slug}`} className={`main-button ${styles.ctaButton}`}>Read More <img src="./icons/arrow-right.svg" aria-hidden /></Link>
    </div>
  )
}
