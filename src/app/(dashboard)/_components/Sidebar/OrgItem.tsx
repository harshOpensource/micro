"use client";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Image from "next/image";

interface ItemsProps {
  id: string;
  name: string;
  image: string;
}

export const OrgItem = ({ id, name, image }: ItemsProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={image}
          alt={name}
          fill
          onClick={handleClick}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition duration-200",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
