import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  //fallback to do
  return (
    <Room roomId={params.boardId} fallback>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
