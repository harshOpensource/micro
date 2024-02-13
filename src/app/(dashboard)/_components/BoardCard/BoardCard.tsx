"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/Actions";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { useApiMuatation } from "@/hooks/use-api-mutation";
import { api } from "../../../../../convex/_generated/api";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  orgId: string;
  isFavourite: boolean;
}

export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorName,
  authorId,
  createdAt,
  orgId,
  isFavourite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMuatation(
    api.boards.favorite
  );
  const { mutate: onUnfavorite, pending: pendingUnfavorite } = useApiMuatation(
    api.boards.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavourite) {
      onUnfavorite({ id }).catch(() => toast.error("Failed to unfavorite"));
    } else {
      onFavorite({ id, orgId }).catch(() => toast.error("Failed to favorite"));
    }
  };

  return (
    <Link href={`/boards/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          authorLabel={authorLabel}
          title={title}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          isFavorite={isFavourite}
          disabled={pendingFavorite || pendingUnfavorite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};