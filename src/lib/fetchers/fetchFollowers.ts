import JSZip from "jszip";

import Follower from "@/interfaces/Follower";

export default async function fetchFollowers(zip: JSZip): Promise<Follower[]> {
  const contents = await zip
    .file("followers_and_following/followers_1.json")
    ?.async("text");
  if (!contents) return [];

  const json = JSON.parse(contents);

  const followers = [];
  for (const entry of json) {
    const data = entry.string_list_data[0];

    followers.push({
      link: data.href,
      username: data.value,
      followed_at: data.timestamp,
    });
  }

  return followers;
}
