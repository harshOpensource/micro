import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

type Props = {};

export const EmptyOrg = ({}: Props) => {
  return (
    <div className="h-full items-center justify-center flex flex-col">
      <Image src="/elements.svg" alt="Empty State" width={200} height={200} />
      <div className="text-2xl font-semibold mt-6">Welcome to Micro</div>
      <div className="text-muted-foreground text-sm mt-2">
        Create An Organization to get Started
      </div>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create an Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
