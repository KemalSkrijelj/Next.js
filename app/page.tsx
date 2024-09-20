import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="text-special bg-blue-950 min-h-50vh  px-12 py-4 ">
      <h1 className="py-4">Hello this is test</h1>
      <Button variant={'outline'}>Click me!</Button>
    </main>
  );
}
