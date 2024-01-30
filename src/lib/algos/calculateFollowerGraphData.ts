import dayjs from "dayjs";

import Follower from "@/interfaces/Follower";

const FOLLOWER_WINDOW_SIZE = 86400 * 7; // 7 days in seconds

export default function calculateFollowerGraphData(followers: Follower[] | undefined) {
  const sortedFollowers = followers?.sort((a, b) => a.followed_at - b.followed_at);

  let result: { x: string, y: number, followersAtPresent: number }[] = [];
  sortedFollowers?.forEach((follower, idx) => {
    const currentTime = dayjs.unix(follower.followed_at);
    const windowStart = currentTime.subtract(FOLLOWER_WINDOW_SIZE * 1000);

    // Filter followers within the time window
    const followersInWindow = sortedFollowers.filter(
      (f) => f.followed_at >= windowStart.unix() && f.followed_at <= currentTime.unix()
    );

    const uniqueFollowers = [...new Set(followersInWindow.map((f) => f.username))];
    const growthDifference = idx > 0 ? uniqueFollowers.length - result[idx - 1].y : 0;

    result.push({ x: currentTime.format("MMMM YYYY"), y: uniqueFollowers.length, followersAtPresent: idx + growthDifference });
    console.log(result,"rizzzzzzz")
  });

  return result;
}