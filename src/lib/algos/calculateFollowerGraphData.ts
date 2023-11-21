import dayjs from "dayjs";

import Follower from "@/interfaces/Follower";

const FOLLOWER_WINDOW_SIZE = 86400 * 7; // 7 days in seconds

export default function calculateFollowerGraphData(followers: Follower[] | undefined) {
  const sortedFollowers = followers?.sort((a, b) => a.followed_at - b.followed_at);

  return sortedFollowers?.map((follower, idx) => {
    const currentTime = dayjs.unix(follower.followed_at);
    const windowStart = currentTime.subtract(FOLLOWER_WINDOW_SIZE * 1000);

    // Filter followers within the time window
    const followersInWindow = sortedFollowers.filter(
      (f) => f.followed_at >= windowStart.unix() && f.followed_at <= currentTime.unix()
    );

    const uniqueFollowers = [...new Set(followersInWindow.map((f) => f.username))];

    return { x: currentTime.format("ddd MMMM YYYY"), y: uniqueFollowers.length, followersAtPresent: idx };
  });
}