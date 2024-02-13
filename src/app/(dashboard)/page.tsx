"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/EmptyOrg";
import { BoardList } from "./_components/BoardList";

type DashboardPageProps = {
  searchParams: {
    search?: string;
    favourites?: string;
  };
};

function DashboardPage({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {organization ? (
        <BoardList orgId={organization.id} query={searchParams} />
      ) : (
        <EmptyOrg />
      )}
    </div>
  );
}

export default DashboardPage;
