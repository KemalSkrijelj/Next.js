import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await data.json();
  console.log(todo);
  return (
    <main>
      <h1>{todo.title}</h1>
      <Image src="./vercel.svg" alt="Vercel logo" width={72} height={16} />
    </main>
  );
}
