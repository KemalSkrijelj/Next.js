import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Logo from "@/components/navigation/logo";
import Link from "next/link";

export default async function Nav() {
  const session = await auth();
  return (
    <header className="py-8">
      <nav className="">
        <ul className="flex justify-between">
          <li>
            <Link href={'/'}>
              <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild className="bg-green-400 color-white">
                <Link className="flex gap-2" href="/auth/login">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton
                expires={session?.expires ?? ""}
                user={session?.user}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
