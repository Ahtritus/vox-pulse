import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-24">
      <SignIn />
    </div>
  );
}
