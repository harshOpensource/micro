import { Skeleton } from "@/components/ui/skeleton";

export const Toolbar = () => {
  return (
    <div className="fixed top-1/2 left-2 transform -translate-y-1/2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Shadow</div>
        <div>Square</div>
        <div>Circle</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

Toolbar.Skeleton = function ToolbarSkeleton() {
  return (
    <div className="fixed top-1/2 left-2 shadow-md rounded-md transform -translate-y-1/2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]" />
  );
};
