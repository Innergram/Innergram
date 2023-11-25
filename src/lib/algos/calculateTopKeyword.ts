import Chat from '@/interfaces/Chat';
import * as fs from 'fs';
import * as _ from 'lodash';

interface JSONItem {
  text: string;
}


export default function extractTopKeywordsFromChats(chats: Chat[] | undefined): string[] {
  if (!chats) return [];
  let allContent = "";
  for (const chat of chats) {
    if (!chat.messages) continue;
    for (const message of chat.messages) {
      if (!message.content) continue;
      if (message.from != "Shrey Khetan") continue;
      
      allContent+= message.content + " ";
  }
  const keywords = extractTopKeywords(allContent);
  console.log("keywords", keywords);
}}

function extractTopKeywords(text: string): string[] {
  try {

    // Tokenize text into words and count occurrences
    const wordsCount = _.words(text)
      .reduce((acc: Record<string, number>, word: string) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

    // Sort words by count in descending order
    const sortedWords = Object.keys(wordsCount).sort((a, b) => wordsCount[b] - wordsCount[a]);

    // Return the top N keywords
    return sortedWords.slice(0, 10);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}
