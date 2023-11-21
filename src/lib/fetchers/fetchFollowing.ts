import JSZip from "jszip";

import Following from "@/interfaces/Following";

export default async function fetchFollowing(zip: JSZip): Promise<Following[]> {
  const contents = await zip
    .file("followers_and_following/following.json")
    ?.async("text");
  if (!contents) return [];

  const json = JSON.parse(contents);

  const following = [];
  for (const entry of json.relationships_following) {
    const data = entry.string_list_data[0];

    following.push({
      link: data.href,
      username: data.value,
      followed_at: data.timestamp,
    });
  }

  return following;
}
