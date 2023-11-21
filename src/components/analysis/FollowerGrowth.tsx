import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import dayjs from "dayjs";

import Follower from "@/interfaces/Follower";
import { Card } from '../ui/card';

export default function FollowerGrowth({ followers }: { followers: Follower[] | undefined }) {
  const sorted = followers?.sort((a, b) => a.followed_at - b.followed_at);

  let followerCount = 0;
  const data = sorted?.map((follower) => {
    followerCount++;
    return { x: dayjs.unix(follower.followed_at).format("MMMM YYYY"), y: followerCount };
  });

  return (
    <Card className='p-4 h-[30vh] w-full flex flex-col gap-2'>
      <p className="font-marker text-primary/80 text-2xl">
        Follower Growth
      </p>

      <ResponsiveContainer>
        <LineChart data={data}>
          <Line type="monotone" dataKey="y" stroke="#ff7300"  />
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
