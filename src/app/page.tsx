import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Button>Sign In</Button>
      <UserButton afterSignOutUrl="/" />
      vfdv
    </>
  );
}
