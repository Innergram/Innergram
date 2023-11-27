import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import Follower from "@/interfaces/Follower";
import calculateFollowerGraphData from '@/lib/algos/calculateFollowerGraphData';

import { Card } from '../ui/card';

export default function FollowerGrowth({ followers }: { followers: Follower[] | undefined }) {
  const data = calculateFollowerGraphData(followers);

  // @ts-ignore
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0];

      return (
        <div>

          <p>Total followers: {data.payload.followersAtPresent}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <Card className='p-4 h-[30vh] w-full flex flex-col gap-2'>
      <p className="font-seymour-one text-primary/80 text-3xl">
        Follower Growth
      </p>

      <ResponsiveContainer>
        <LineChart data={data}>
          <Line dot={false} dataKey="y" stroke="#BA1C3F"  />
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />

          <CartesianGrid stroke="white" />

          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
