import emojiRegex from "emoji-regex";

import Chat from "@/interfaces/Chat";

export default function extractEmojis(chats: Chat[] | undefined): string[] {
  if (!chats) return [];

  // Get all emojis in all messages
  const emojis: string[] = [];
  chats?.forEach((chat) => {
    chat.messages?.forEach((message) => {
      const content = message.content;
      if (!content) return;

      // Get all emojis in the message
      const regex = emojiRegex();
      const matches = content.match(regex);
      if (!matches) return;

      // Add each emoji to the list
      matches.forEach((match) => {
        emojis.push(match);
      });
    });
  });

  return emojis;
}