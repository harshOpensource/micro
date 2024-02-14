"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Id } from "../../../../../convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import { Actions } from "@/components/Actions";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const TabSeperator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.boards.gets, {
    id: boardId as Id<"boards">,
  });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="rounded-md absolute top-2 left-2 h-12 px-1.5 items-center hover:bg-neutral-100 flex shadow-md bg-white">
      <Hint label="Go to Boards" sideOffset={20} side="bottom">
        <Button asChild variant={"board"} className="px-2 hover:bg-transparent">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="board logo" width={40} height={40} />
            <div className="font-semibold text-xl ml-2 text-black">Micro</div>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint side="bottom" sideOffset={20} label="Rename Board">
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant={"board"}
          className="text-base px-2 font-normal"
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main Menu" sideOffset={20}>
            <Button size={"icon"} variant={"board"}>
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md ">
      <Button variant={"board"} className="px-2">
        <Image src={"/logo.svg"} alt="board logo" width={40} height={40} />
        <div className="font-semibold text-xl ml-2 text-black">Micro</div>
      </Button>
    </div>
  );
};
