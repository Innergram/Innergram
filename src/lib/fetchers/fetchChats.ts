import JSZip from "jszip";

import Chat from "@/interfaces/Chat";
import Message from "@/interfaces/Message";

const filePathPattern = /messages\/inbox\/(?:[^/]+\/)*[^/]+\.[^/]+$/;

export default async function fetchChats(zip: JSZip): Promise<Chat[]> {
  const files = zip.filter((path, _) => filePathPattern.test(path) && !path.includes("photos") && !path.includes("audio") && !path.includes("videos"));
  
  const chats = [];
  for (const file of files) { // each file represents a chat or a DM here
    const contents = await file.async("text");
    if (!contents) return [];

    try {
      JSON.parse(contents);
    } catch {
      console.log(`errored out on file: ${file.name}`);
      continue;
    }
    const json = JSON.parse(contents);
    
    const participants = json.participants.map((obj: { name: string }) => obj.name);
    const messages: Message[] = json.messages.map((m: any) => ({
      from: m.sender_name,
      sent_at: m.timestamp_ms,
      content: m.content,
      reactions: m.reactions ? m.reactions.map((r: any) => ({
        code: r.reaction,
        actor: r.actor
      })) : []
    }));

    chats.push({
      participants,
      messages
    });
  }

  return chats;
} 