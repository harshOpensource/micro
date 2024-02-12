"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { OrgItem } from "./OrgItem";

export const OrgList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  return (
    <div className="space-y-4">
      {userMemberships.data?.map((org) => (
        <OrgItem
          key={org.organization.id}
          id={org.organization.id}
          name={org.organization.name}
          image={org.organization.imageUrl}
        />
      ))}
    </div>
  );
};
