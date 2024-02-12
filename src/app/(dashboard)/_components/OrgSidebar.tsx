"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Micro logo" width={60} height={60} />
          <div className="font-semibold text-2xl">Micro</div>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              borderRadius: "8px",
              width: "100%",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />
      <div className="space-y-4">
        <Button
          asChild
          size="lg"
          variant={favourites ? "ghost" : "secondary"}
          className={cn(
            "font-normal justify-start px-2 w-full",
            !favourites && "font-semibold"
          )}
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Boards
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant={favourites ? "secondary" : "ghost"}
          className={cn(
            "font-normal justify-start px-2 w-full",
            favourites && "font-semibold"
          )}
        >
          <Link
            href={{
              pathname: "/",
              query: { favourites: "true" },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favourite Boards
          </Link>
        </Button>
      </div>
    </div>
  );
};
