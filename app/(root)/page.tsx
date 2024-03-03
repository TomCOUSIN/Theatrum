import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <section className="w-full shadow-xl">
      <div className="w-[80%] mx-auto flex flex-row justify-between items-center p-3">
        <h1 className="font-extrabold text-3xl">Theatrum</h1>
        <div className="flex flex-row items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" showName={true} />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-row gap-2">
              <Link href="/sign-in">
                <Button size="sm" variant="outline">Log In</Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </SignedOut>
          <ThemeToggle/>
        </div>
      </div>
    </section>
  );
}
