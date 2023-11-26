import Chat from "@/interfaces/Chat";
import * as _ from "lodash";

const TOP_KEYWORDS_COUNT = 10;

export default function extractTopKeywordsFromChats(
  chats: Chat[] | undefined,
  from: string
): string[] {
  if (!chats) return [];

  let allContent = "";
  for (const chat of chats) {
    if (!chat.messages) continue;

    for (const message of chat.messages) {
      if (!message.content) continue;
      if (message.from !== from) continue;

      // Concatenate all messages into one string
      allContent += message.content + " ";
    }
  }

  return extractTopKeywords(allContent);
}

function extractTopKeywords(text: string): string[] {
  try {
    // Tokenize text into words and count occurrences
    const wordsCount = _.words(text).reduce(
      (acc: Record<string, number>, word: string) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      },
      {}
    );

    // Sort words by count in descending order
    const sortedWords = Object.keys(wordsCount).sort(
      (a, b) => wordsCount[b] - wordsCount[a]
    );

    // Return the top N keywords
    return sortedWords.slice(0, TOP_KEYWORDS_COUNT);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
