"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { EmptyBoards } from "./EmptyBoards";
import { EmptyFavorites } from "./EmptyFavourites";
import { EmptySearch } from "./EmptySearch";
import { BoardCard } from "./BoardCard/BoardCard";
import { NewBoardButton } from "./BoardCard/new-board-button";

interface BoardListProps {
  query?: {
    search?: string;
    favourites?: string;
  };
  orgId: string;
}
export const BoardList = ({ query, orgId }: BoardListProps) => {
  const data = useQuery(api.boards.get, {
    orgId,
    search: query?.search,
    favorites: query?.favourites,
  });

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query?.favourites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favourites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <div className="text-3xl">
        {query?.favourites ? "Favourites" : "Team Boards"}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorName={board.authorName}
            authorId={board.authorId}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
