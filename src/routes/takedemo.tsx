
import TopHeader from "@/components/TopHeader";

import {
  BadgeCheckIcon,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Separator } from "../components/ui/separator";
import Badge from "../components/Badge";
import Flag from "../components/Flag";
import avatarImgUrl from "../profilepic.webp";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";

function Takedemo() {
  const emojiArray = [
    ["😊", getRandomNumber()],      // Smiling face with smiling eyes
    ["✨", getRandomNumber()],      // Sparkles
    ["🌸", getRandomNumber()],      // Cherry blossom
    ["🌿", getRandomNumber()],      // Herb
    ["💖", getRandomNumber()],      // Sparkling heart
    ["🌙", getRandomNumber()],      // Crescent moon
    ["🌷", getRandomNumber()],      // Tulip
    ["🌟", getRandomNumber()],      // Shooting star
    ["🍃", getRandomNumber()],      // Leaf fluttering in wind      // Musical notes
    ["🌺", getRandomNumber()],      // Hibiscus
    ["🌊", getRandomNumber()],
    ["🌹", getRandomNumber()],      // Rose
    ["🌞", getRandomNumber()],      // Sun with face
    ["🌻", getRandomNumber()],      // Sunflower
    ["🍂", getRandomNumber()]       // Water wave
];
  function getRandomNumber() {
    return Math.floor(Math.random() * 20) + 1; // Generates a random number between 1 and 20
  }
  const icons = [
    ["https://www.facebook.com/favicon.ico", "CandanceKrepe"],
    [
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082023/screen_shot_2023-08-11_at_2.20.24_pm.png?eI_UtE0Cw_RleVmlqEu__hq0uJabwyGl&itok=4KkDNPuY",
      "Candance_09",
    ],
    ["https://www.instagram.com/favicon.ico", "CandancePvt"],
  ];
  const topKeywords = [
    "You",
    "The",
    "Music",
    "Gooddd",
    "Best",
    "Fun",
    "Nahh",
    "Love",
    "why",
  ];
  const joinedWithCommas = topKeywords.join(", ");

  const data = [
    { x: "February 2023", y: 1, followersAtPresent: 0 },
    { x: "February 2023", y: 2, followersAtPresent: 2 },

    { x: "February 2023", y: 3, followersAtPresent: 3 },

    { x: "February 2023", y: 4, followersAtPresent: 4 },

    { x: "February 2023", y: 5, followersAtPresent: 5 },

    { x: "February 2023", y: 6, followersAtPresent: 6 },

    { x: "February 2023", y: 7, followersAtPresent: 7 },

    { x: "February 2023", y: 8, followersAtPresent: 8 },
    { x: "February 2023", y: 9, followersAtPresent: 9 },
    { x: "February 2023", y: 10, followersAtPresent: 10 },
    { x: "February 2023", y: 11, followersAtPresent: 11 },
    { x: "February 2023", y: 12, followersAtPresent: 12 },

    { x: "February 2023", y: 13, followersAtPresent: 13 },
    { x: "February 2023", y: 14, followersAtPresent: 14 },
    { x: "February 2023", y: 15, followersAtPresent: 15 },
    { x: "February 2023", y: 16, followersAtPresent: 16 },
    { x: "February 2023", y: 17, followersAtPresent: 17 },

    { x: "February 2023", y: 18, followersAtPresent: 18 },
    { x: "February 2023", y: 19, followersAtPresent: 19 },

    { x: "February 2023", y: 12, followersAtPresent: 12 },

    { x: "February 2023", y: 13, followersAtPresent: 21 },

    { x: "February 2023", y: 12, followersAtPresent: 20 },

    { x: "March 2023", y: 8, followersAtPresent: 18 },

    { x: "March 2023", y: 4, followersAtPresent: 19 },

    { x: "March 2023", y: 4, followersAtPresent: 24 },

    { x: "March 2023", y: 5, followersAtPresent: 26 },

    { x: "March 2023", y: 5, followersAtPresent: 26 },

    { x: "March 2023", y: 6, followersAtPresent: 28 },

    { x: "March 2023", y: 6, followersAtPresent: 28 },
    { x: "March 2023", y: 7, followersAtPresent: 30 },
    { x: "March 2023", y: 8, followersAtPresent: 31 },

    { x: "March 2023", y: 9, followersAtPresent: 32 },
    { x: "March 2023", y: 9, followersAtPresent: 32 },
    { x: "March 2023", y: 10, followersAtPresent: 34 },

    { x: "March 2023", y: 10, followersAtPresent: 34 },
    { x: "March 2023", y: 9, followersAtPresent: 34 },
    { x: "March 2023", y: 8, followersAtPresent: 35 },
    { x: "March 2023", y: 9, followersAtPresent: 38 },

    { x: "March 2023", y: 10, followersAtPresent: 39 },
    { x: "March 2023", y: 3, followersAtPresent: 32 },
    { x: "March 2023", y: 2, followersAtPresent: 39 },
    { x: "March 2023", y: 3, followersAtPresent: 42 },

    { x: "March 2023", y: 4, followersAtPresent: 43 },
    { x: "March 2023", y: 5, followersAtPresent: 44 },
    { x: "March 2023", y: 6, followersAtPresent: 45 },
    { x: "April 2023", y: 1, followersAtPresent: 40 },
    { x: "April 2023", y: 2, followersAtPresent: 47 },
    { x: "April 2023", y: 2, followersAtPresent: 47 },
    { x: "May 2023", y: 1, followersAtPresent: 47 },
    { x: "June 2023", y: 1, followersAtPresent: 49 },
    { x: "June 2023", y: 2, followersAtPresent: 51 },
    { x: "June 2023", y: 3, followersAtPresent: 52 },
    { x: "June 2023", y: 2, followersAtPresent: 51 },
    { x: "June 2023", y: 3, followersAtPresent: 54 },
    { x: "July 2023", y: 1, followersAtPresent: 52 },
    { x: "August 2023", y: 1, followersAtPresent: 55 },
    { x: "September 2023", y: 1, followersAtPresent: 56 },
  ];

  // @ts-ignore
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      console.log(payload);
      return (
        <div>
          <p>Total followers: {data.payload.followersAtPresent}</p>
        </div>
      );
    }
  };

  const sortedChats = [
    "WhimsyWanderer",
    "DreamyDaze",
    "SoulfulSerenade",
    "EnchantingEcho",
    "MysticMingle",
    "VelvetVoyager",
    "WanderlustWhisper",
    "AuroraAmble",
    "TwilightTraverse",
    "StarrySojourn",
    "GlimmeringGaze",
    "CelestialCharm",
  ];

  return (
    <>
      <div className="px-8 py-4 flex flex-col space-y-4">
        <TopHeader />

        {/* PROFILE CARD */}

        <Card className="relative flex flex-row p-4 items-center space-x-4">
          <>
            <Avatar className="h-16 w-16">
              <AvatarImage src={avatarImgUrl} alt={`@candance_09`} />
              <AvatarFallback>"Shrey Ketan"</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-1">
              <div className="flex flex-row space-x-2 items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p className="text-xl text-primary font-mono">
                        @candance_09
                      </p>
                    </TooltipTrigger>

                    <TooltipContent>AKA candance krepe</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Separator orientation="vertical" className="h-5" />

                <Badge
                  icon={
                    <p className="w-6 h-4">
                      <Flag countryCode={"US"} />
                    </p>
                  }
                  tooltip="Account based in"
                />

                <Badge
                  icon={
                    <BadgeCheckIcon className="text-accent hover:text-primary" />
                  }
                  tooltip={"Public Account"}
                />
              </div>

              <p className="w-4/5">
                Curator of dreams, dancing through the realms of creativity,
                while painting life's canvas with a kaleidoscope of passions and
                purpose.
              </p>
            </div>

            <div className="flex flex-col flex-grow items-end gap-1">
              <div className="flex flex-row gap-2 items-center">
                <p>
                  Followers: <span className="text-primary">56</span>
                </p>

                <Separator orientation="vertical" className="h-5" />

                <p>
                  Following: <span className="text-primary">905</span>
                </p>
              </div>

              <p className="font-thin opacity-30">Joined 09/03/2014</p>
            </div>
          </>
        </Card>

        {/* TOP EMOJIS */}

        <div className="flex flex-row justify-stretch space-x-4 w-full">
          <Card className="p-4 flex flex-row justify-between items-center">
            <div className="flex flex-col items-center justify-center mr-8">
              <p className="text-primary/80 font-seymour-one text-3xl">
                Your Top Emojis
              </p>
            </div>

            <div className="grid grid-cols-5">
              {emojiArray.map((emoji, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-1">
                  <p className="text-6xl p-3">{emoji[0]}</p>
                  <p className="text-primary/80 font-sans text-sm ">
                    {emoji[1]}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col flex-grow space-y-6">
            {/* LINKED ACCOUNTS */}

            <Card className="p-4 flex flex-col w-full space-y-4">
              <p className=" text-primary/80 font-seymour-one text-center  text-3xl">
                Linked Meta Accounts
              </p>
              <br></br>

              <div className="flex flex-row justify-evenly">
                {icons?.map((item) => {
                  return (
                    <a
                      // href={account.url}
                      className="flex flex-col justify-center items-center"
                    >
                      <img
                        // @ts-ignore
                        src={item[0]}
                        className="h-8 w-8 mb-1"
                      />
                      <p className="text-primary">{item[1]}</p>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* TOP KEYWORDS */}

            <Card className="p-4 flex flex-row justify-evenly items-center h-[20vh]">
              <div className="flex flex-col items-center justify-center mr-8">
                <p className="text-primary/80 font-seymour-one text-3xl">
                  Your Top Keywords
                </p>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <p className=" font-seymour-one text-2xl">{joinedWithCommas}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* FOLLOWER GROWTH */}

      <div>
        <Card className="p-4 h-[30vh] w-full flex flex-col gap-2">
          <p className="font-seymour-one text-primary/80 text-3xl">
            Follower Growth
          </p>

          <ResponsiveContainer>
            <LineChart data={data}>
              <Line dot={false} dataKey="y" stroke="#BA1C3F" />
              <XAxis dataKey="x" />
              <YAxis dataKey="y" />

              <CartesianGrid stroke="white" />

              {/* @ts-ignore */}
              <RechartsTooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Least engaged users */}

      <div className=" max-w-fit mt-6">
        <Card className="p-7 flex flex-col w-full space-y-4 ">
          <p className=" text-primary/80 text-3xl  bold font-seymour-one">
            Least Engaged Accounts
          </p>
          <p className="text-[20px] font-mono bold text-gray-500">
            Showing <span>12</span>/<span>12</span> Accounts
          </p>
          <div className="">
            <ul>
              {sortedChats?.map((item, index) => (
                <li key={index} className="text-xl font-seymour-one my-4">
                  <span className="py-3 pr-3">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Takedemo;
