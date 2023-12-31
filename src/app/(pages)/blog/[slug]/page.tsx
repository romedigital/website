import type { Metadata } from "next"
import BlogContent from "@/app/(mainsite)/components/blogpage/BlogContent/BlogContent"

export const metadata: Metadata = {
    title: "Blog | Small Business Web Design and Development",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

import { getDocumentSlugs } from "outstatic/server";

export async function generateStaticParams() {
  const posts = getDocumentSlugs('posts')
  return posts.map((slug) => ({ slug }))
}

export default function Article({params}: {params: {slug: string}}){
    return(
        <BlogContent slug={params.slug} />
    )
}