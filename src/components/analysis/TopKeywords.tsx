import Chat from "@/interfaces/Chat";
import { Card } from "../ui/card";
import extractTopKeywordsFromChats from "@/lib/algos/extractTopKeywordsFromChats";

export default function TopKeywords({ chats, from }: { chats: Chat[] | undefined, from: string }) {
  const topKeywords: string[] = extractTopKeywordsFromChats(chats, from);
  const joinedWithCommas = topKeywords.join(", ");
  
  return (
    <Card className="p-4 flex flex-row justify-evenly items-center h-[20vh]">
      <div className="flex flex-col items-center justify-center mr-8">
        <p className="text-primary/80 font-seymour-one text-3xl">Your Top Keywords</p>
      </div>

      <div className="flex flex-col items-center space-y-1">
          <p className=" font-seymour-one text-2xl">{joinedWithCommas}</p>
      </div>
    </Card>
  );
}