import Chat from "@/interfaces/Chat";

import extractEmojis from "@/lib/algos/extractEmojis";
import rankTopEmojis from "@/lib/algos/rankTopEmojis";

import { Card } from "../ui/card";

export default function TopEmojis({ chats }: { chats: Chat[] | undefined }) {
  const emojis = extractEmojis(chats);
  const rankedEmojis = rankTopEmojis(emojis).slice(0, 15);
  
  return (
    <Card className="p-4 flex flex-row justify-between items-center">
      <div className="flex flex-col items-center justify-center mr-8">
        <p className="text-primary/80 font-seymour-one text-3xl">Your Top Emojis</p>
      </div>

      <div className="grid grid-cols-5">
        {rankedEmojis.map((emoji, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <p className="text-6xl p-3">{emoji[0]}</p>
            <p className="text-primary/80 font-mono text-sm ">{emoji[1]}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}