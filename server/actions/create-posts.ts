'use server'

import { db } from "@/server"
import { posts } from "../schema";
import { revalidatePath } from "next/cache";

export default async function createPost(FormData: FormData) {
  const title = FormData.get("title")?.toString()
  if (!title) {
    return {error: "Title not required"}
  }
  revalidatePath('/')
  const post = await db.insert(posts).values({
    title, 
  })
  return {succes: post}
}