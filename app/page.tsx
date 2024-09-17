import createPost from "@/server/actions/create-posts";
import getPosts from "@/server/actions/get-posts";
import Image from "next/image";
import PostBtn from "@/components/post-btn";
export default async function Home() {
  const { error, succes } = await getPosts();
  if (error) {
    throw new Error(error);
  }
  if (succes)
    return (
      <main>
        {succes.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
        <form action={createPost}>
          <input
            className="bg-black"
            type="text"
            name="title"
            placeholder="Title"
          />
          <PostBtn />
        </form>
        <Image src="./vercel.svg" alt="Vercel logo" width={72} height={16} />
      </main>
    );
}
