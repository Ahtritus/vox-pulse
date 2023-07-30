import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="mx-auto bg-blue-700 py-4 px-6 flex mb-5 sticky top-0 z-50 justify-between">
        <Link href="/">
          <div className="text-lg font-bold text-white">VoxPulse</div>
        </Link>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>
    </>
  );
};
