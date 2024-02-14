import { Skeleton } from "@/components/ui/skeleton";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  RectangleHorizontal,
  Redo2,
  Square,
  StickyNote,
  Text,
  Undo2,
} from "lucide-react";

export const Toolbar = () => {
  return (
    <div className="fixed top-1/2 left-2 transform -translate-y-1/2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Text"
          icon={Text}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton label="Undo" icon={Undo2} onClick={() => {}} />
        <ToolButton label="Redo" icon={Redo2} onClick={() => {}} />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="fixed top-1/2 left-2 shadow-md rounded-md transform -translate-y-1/2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]" />
  );
};
