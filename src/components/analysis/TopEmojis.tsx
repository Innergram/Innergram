import Chat from "@/interfaces/Chat";

import { Card } from "../ui/card";

export default function TopEmojis({ chats }: { chats: Chat[] | undefined }) {
    const emojis = [
      "😂",
      "😭",
      "😍",
      "😊",
      "😒",
      "😘",
      "😩",
      "😔",
      "😏",
      "😁",
      "😉",
      "😳",
      "😅",
      "😌",
      "😢",
    ];
  
    return (
      <Card className="p-4 flex flex-row justify-between items-center">
        <div className="flex flex-col items-center justify-center mr-8">
          <p className="text-primary/80 font-marker text-4xl">Your Top Emojis</p>
        </div>
  
        <div className="grid grid-cols-5">
          {emojis.map((emoji, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-1">
              <p className="text-6xl">{emoji}</p>
              <p className="text-primary/80 font-mono text-sm">12.3k</p>
            </div>
          ))}
        </div>
      </Card>
    );
  }