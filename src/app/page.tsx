import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";

export default function Home() {
  const { userId, sessionId, getToken } = auth();

  return (
    <>
      <Button>Sign In</Button>
      <UserButton afterSignOutUrl="/" />
      vfdv
    </>
  );
}
