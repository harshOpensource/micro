import { OrgList } from "./OrgList";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <div className="fixed z-[1] left-0 bg-emerald-900 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <OrgList />
      <NewButton />
    </div>
  );
};
