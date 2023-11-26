export default function rankEmojis(emojiList: string[]): [string, number][] {
  const emojiCount: Map<string, number> = new Map();

  // Count the occurrences of each emoji in the list
  emojiList.forEach((emoji) => {
      emojiCount.set(emoji, (emojiCount.get(emoji) || 0) + 1);
  });

  // Convert the map into an array of [emoji, count] pairs
  const emojiCountArray: [string, number][] = Array.from(emojiCount.entries());

  // Sort the array based on the count in descending order
  emojiCountArray.sort((a, b) => b[1] - a[1]);

  return emojiCountArray;
}