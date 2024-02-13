"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { api } from "../../../../convex/_generated/api";
import { useApiMuatation } from "@/hooks/use-api-mutation";
import { Loader, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMuatation(api.boards.create);

  const onCreateBoard = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" height={110} width={110} alt="Empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onCreateBoard} size="lg">
          {pending ? (
            <div className="w-[106px] items-center flex justify-center">
              <Loader2 className=" items-center text-white animate-spin" />
            </div>
          ) : (
            "Create a Board"
          )}
        </Button>
      </div>
    </div>
  );
};
