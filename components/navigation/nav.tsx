import { auth } from "@/server/auth";
import { UserButton } from "./user-button";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

export default async function Nav() {
  const session = await auth();
  return (
    <header className="">
      <nav className="bg-slate-500   items-center">
        <ul className="flex justify-between">
          <li>
            <Logo />
          </li>
          {!session ? (
            <li>
              <Button asChild className="bg-green-400 color-white">
                <Link className="flex gap-2" href="/auth/login">
                  <LogIn size={16}/>
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
