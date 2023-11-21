import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Chart } from "react-google-charts";
import { useTheme } from "@/components/ThemeProvider";


import JsZip from "jszip";
import {
  BadgeCheckIcon,
  ExternalLinkIcon,
  PersonStandingIcon,
} from "lucide-react";
// import followerGrowth from "@/components/followerGrowth";
// import FollowerGrowth from '../components/followerGrowth.tsx'; // Adjust the path accordingly

import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import fetchPersonalInfo from "@/lib/fetchers/fetchPersonalInfo";
import { initials } from "@/lib/utils";
import fetchAccountInfo from "@/lib/fetchers/fetchAccountInfo";
import AccountInfo from "@/interfaces/AccountInfo";
import PersonalInfo from "@/interfaces/PersonalInfo";
import Flag from "@/components/Flag";
import Badge from "@/components/Badge";
import fetchLinkedAccounts from "@/lib/fetchers/fetchLinkedAccounts";
import LinkedAccount from "@/interfaces/LinkedAccount";
import fetchFollowers from "@/lib/fetchers/fetchFollowers";
import Follower from "@/interfaces/Follower";
import Following from "@/interfaces/Following";
import fetchFollowing from "@/lib/fetchers/fetchFollowing";

function LinkedAccountsCard({
  accounts,
}: {
  accounts: LinkedAccount[] | undefined;
}) {
  return (
    <Card className="p-4 flex flex-col w-full space-y-4">
      <p className="font-marker text-primary/80 text-2xl">
        Linked Meta Accounts
      </p>

      <div className="flex flex-row justify-evenly items-center">
        {accounts?.map((account) => {
          const icons = {
            Facebook: "https://www.facebook.com/favicon.ico",
            Threads:
              "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082023/screen_shot_2023-08-11_at_2.20.24_pm.png?eI_UtE0Cw_RleVmlqEu__hq0uJabwyGl&itok=4KkDNPuY",
            Instagram: "https://www.instagram.com/favicon.ico",
          };

          return (
            <a
              // href={account.url}
              className="flex flex-col justify-center items-center"
            >
              <img
                // @ts-ignore
                src={icons[account?.platform]}
                alt={account.platform}
                className="h-8 w-8 mb-1"
              />

              <p className="text-primary">{account.username}</p>
            </a>
          );
        })}
      </div>
    </Card>
  );
}

function TopEmojisCard() {
  const emojis = [
    "😂",
    "😭",
    "😍",
    "😊",
    "😒",
    "😘",
    "😩",
    "😔",
    "😏",
    "😁",
    "😉",
    "😳",
    "😅",
    "😌",
    "😢",
  ];

  return (
    <Card className="p-4 flex flex-row justify-between items-center">
      <div className="flex flex-col items-center justify-center mr-8">
        <p className="text-primary/80 font-marker text-4xl">Your Top Emojis</p>
      </div>

      <div className="grid grid-cols-5">
        {emojis.map((emoji, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-1">
            <p className="text-6xl">{emoji}</p>
            <p className="text-primary/80 font-mono text-sm">12.3k</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ProfileCard({
  processing,
  personalInfo,
  accountInfo,
  followers,
  following,
}: {
  processing: boolean;
  personalInfo?: PersonalInfo;
  accountInfo?: AccountInfo;
  followers: Follower[] | undefined;
  following: Following[] | undefined;
}) {
  const avatarImgUrl = URL.createObjectURL(
    personalInfo?.profile_photo || new Blob()
  );
  const profileUrl = `https://instagram.com/${personalInfo?.username}`;

  return (
    <Card className="relative flex flex-row p-4 items-center space-x-4">
      {processing ? (
        <>
          <Skeleton className="h-12 w-12 rounded-full" />

          <div className="flex flex-col gap-2 w-[20vw]">
            <Skeleton className="h-4" />
            <Skeleton className="h-4" />
          </div>

          <div className="flex-grow flex flex-col items-end gap-2">
            <Skeleton className="h-4 w-[10vw]" />
            <Skeleton className="h-4 w-[10vw]" />
          </div>
        </>
      ) : (
        <>
          <a href={profileUrl} target="_blank">
            <ExternalLinkIcon className="absolute top-0 right-0 text-primary/30 hover:text-primary" />
          </a>

          <Avatar className="h-16 w-16">
            <AvatarImage
              src={avatarImgUrl}
              alt={`@${personalInfo?.username}`}
            />
            <AvatarFallback>
              {initials(personalInfo?.name ?? "")}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row space-x-2 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-xl text-primary font-mono">
                      @{personalInfo?.username}
                    </p>
                  </TooltipTrigger>

                  <TooltipContent>AKA {personalInfo?.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Separator orientation="vertical" className="h-5" />

              <Badge
                icon={
                  <p className="w-6 h-4">
                    <Flag countryCode={accountInfo?.country_code || "US"} />
                  </p>
                }
                tooltip="Account based in"
              />
              {!personalInfo?.isPrivateAccount && (
                <Badge
                  icon={
                    <PersonStandingIcon className="text-accent hover:text-primary" />
                  }
                  tooltip={"Public Account"}
                />
              )}
              <Badge
                icon={
                  <BadgeCheckIcon className="text-accent hover:text-primary" />
                }
                tooltip={"Verified Account"}
              />
            </div>

            <p className="w-4/5">{personalInfo?.bio}</p>
          </div>

          <div className="flex flex-col flex-grow items-end gap-1">
            <div className="flex flex-row gap-2 items-center">
              <p>
                Followers:{" "}
                <span className="text-primary">{followers?.length}</span>
              </p>

              <Separator orientation="vertical" className="h-5" />

              <p>
                Following:{" "}
                <span className="text-primary">{following?.length}</span>
              </p>
            </div>

            <p className="font-thin opacity-30">Joined 05/12/2016</p>
          </div>
        </>
      )}
    </Card>
  );
}

function TopHeader() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-4xl font-bold font-marker text-primary">
            InstaAnalysis
          </h1>
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

function FollowerGrowth() {
  const { theme } = useTheme();
  const darkThemeOptions = {
    backgroundColor: theme === 'dark' ? 'black' : 'white',
    colors: [theme === 'dark' ? 'white' : 'black'],
    legend: {
      textStyle: {
        color: theme === 'dark' ? 'white' : 'black',
      },
    },
    hAxis: {
      textStyle: {
        color: theme === 'dark' ? 'white' : 'black',
      },
    },
    vAxis: {
      textStyle: {
        color: theme === 'dark' ? 'white' : 'black',
      },
    },
  };

  let follower_count=0;
  const jsonData = [
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/prarthana_rout",
          value: "prarthana_rout",
          timestamp: 1695059688,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/krishagrawal161105",
          value: "krishagrawal161105",
          timestamp: 1692853247,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/__shettyananya__",
          value: "__shettyananya__",
          timestamp: 1688803091,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/onlinemarket_trade",
          value: "onlinemarket_trade",
          timestamp: 1687397011,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/om_astrologist",
          value: "om_astrologist",
          timestamp: 1687157549,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/ipriyanshu_283",
          value: "ipriyanshu_283",
          timestamp: 1686846867,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/dagar_pvt1299",
          value: "dagar_pvt1299",
          timestamp: 1686516068,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/being.aryaman",
          value: "being.aryaman",
          timestamp: 1686506339,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/the_artist_soul19",
          value: "the_artist_soul19",
          timestamp: 1684947505,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/parul_a712",
          value: "parul_a712",
          timestamp: 1681902308,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/cute___shivanii",
          value: "cute___shivanii",
          timestamp: 1681646227,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/pallavi._.1302",
          value: "pallavi._.1302",
          timestamp: 1681270187,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/ahmadtanzeel19",
          value: "ahmadtanzeel19",
          timestamp: 1679935321,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/ekansh_2712",
          value: "ekansh_2712",
          timestamp: 1679930740,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/dxxa._.u._",
          value: "dxxa._.u._",
          timestamp: 1679825153,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/gargkushagra58",
          value: "gargkushagra58",
          timestamp: 1679824837,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/arnavkhetan",
          value: "arnavkhetan",
          timestamp: 1679741669,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/kartikagrawal17",
          value: "kartikagrawal17",
          timestamp: 1679634509,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/buddyyyy2.o",
          value: "buddyyyy2.o",
          timestamp: 1679132875,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/thayaruvuppala",
          value: "thayaruvuppala",
          timestamp: 1679129945,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/the_oli__",
          value: "the_oli__",
          timestamp: 1679022944,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/amanbolnayaar",
          value: "amanbolnayaar",
          timestamp: 1678907069,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/lkssmnnbairdd",
          value: "lkssmnnbairdd",
          timestamp: 1678787328,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/sanjay1644381",
          value: "sanjay1644381",
          timestamp: 1678716385,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/terminator_07112003",
          value: "terminator_07112003",
          timestamp: 1678697047,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/jagdish1208",
          value: "jagdish1208",
          timestamp: 1678640088,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/avnish2701",
          value: "avnish2701",
          timestamp: 1678595305,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/champalal_kumawat_007",
          value: "champalal_kumawat_007",
          timestamp: 1678592639,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/mariyamraza31",
          value: "mariyamraza31",
          timestamp: 1678381217,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/syedahkam",
          value: "syedahkam",
          timestamp: 1678321408,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/dg_mon",
          value: "dg_mon",
          timestamp: 1678280444,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/shreyans_0206",
          value: "shreyans_0206",
          timestamp: 1678189893,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/aditya_bharadwaj03",
          value: "aditya_bharadwaj03",
          timestamp: 1678163195,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/kartik._.p3ddu10",
          value: "kartik._.p3ddu10",
          timestamp: 1678083355,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/mainly0ak",
          value: "mainly0ak",
          timestamp: 1677772208,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/divyansh.tibrewal",
          value: "divyansh.tibrewal",
          timestamp: 1677592395,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/ayush_chaturvedi123",
          value: "ayush_chaturvedi123",
          timestamp: 1677482922,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/through.the_wind",
          value: "through.the_wind",
          timestamp: 1677435581,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/parthnayak37",
          value: "parthnayak37",
          timestamp: 1677262015,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/nakshatra_1448",
          value: "nakshatra_1448",
          timestamp: 1677232584,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/i.anuragbisht9",
          value: "i.anuragbisht9",
          timestamp: 1677210024,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/prateek_273",
          value: "prateek_273",
          timestamp: 1677172533,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/made_of_crbon",
          value: "made_of_crbon",
          timestamp: 1677144672,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/varuvat",
          value: "varuvat",
          timestamp: 1677081124,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/manjaryjasrasaria",
          value: "manjaryjasrasaria",
          timestamp: 1677080894,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/gaurangi_pvt",
          value: "gaurangi_pvt",
          timestamp: 1677053761,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/mitali2312",
          value: "mitali2312",
          timestamp: 1677009193,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/_hmmmnn_",
          value: "_hmmmnn_",
          timestamp: 1676912933,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/pakpakpakaaaa",
          value: "pakpakpakaaaa",
          timestamp: 1676885513,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/aaravbagla",
          value: "aaravbagla",
          timestamp: 1676829980,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/mrfatherregistry",
          value: "mrfatherregistry",
          timestamp: 1676827725,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/aastik.aggarwal",
          value: "aastik.aggarwal",
          timestamp: 1676809272,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/tulip_garg19",
          value: "tulip_garg19",
          timestamp: 1676742205,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/khetan__amit",
          value: "khetan__amit",
          timestamp: 1676740278,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/khyati_garg_64",
          value: "khyati_garg_64",
          timestamp: 1676740087,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/prozomatomenureader",
          value: "prozomatomenureader",
          timestamp: 1676739587,
        },
      ],
    },
    {
      title: "",
      media_list_data: [],
      string_list_data: [
        {
          href: "https://www.instagram.com/vaibhav_dagar_2322",
          value: "vaibhav_dagar_2322",
          timestamp: 1676663710,
        },
      ],
    },
  ];
  jsonData.sort((a, b) => a.string_list_data[0].timestamp - b.string_list_data[0].timestamp);

const chartData = jsonData.map((item, index) => [
  index, new Date(item.string_list_data[0].timestamp * 1000)
]);

  const chartFormattedData = [
    ["Timestamp","Follower count", ], // Replace "Follower Count" with the appropriate label
    ...chartData,
  ];
  return (
    <>
      <Chart
        chartType="LineChart"
        data={chartFormattedData}
        width="100%"
        height="400px"
        legendToggle
        
        className={theme === 'dark' ? 'bg-black' : 'bg-white'}
        style={{ background: theme === 'dark' ? 'black' : 'white' }}
        options={darkThemeOptions}
      />
    </>
  );
}

export default function Analysis() {
  let location = useLocation();

  if (!location.state) {
    return <>No zip file provided</>;
  }

  let { zipArrayBuffer }: { zipArrayBuffer: ArrayBuffer | undefined } =
    location.state;

  const [processing, setProcessing] = useState(false);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | undefined>();
  const [accountInfo, setAccountInfo] = useState<AccountInfo | undefined>();
  const [linkedAccounts, setLinkedAccounts] = useState<LinkedAccount[]>();
  const [followers, setFollowers] = useState<Follower[]>();
  const [following, setFollowing] = useState<Following[]>();

  // First time initialization
  useEffect(() => {
    if (!zipArrayBuffer) return;

    setProcessing(true);

    // Use setTimeout to simulate processing
    setTimeout(() => {
      setProcessing(false);
    }, 3000);
  }, []);

  // Load zip file as a JsZip object
  useEffect(() => {
    if (!zipArrayBuffer) return;

    new JsZip().loadAsync(zipArrayBuffer).then((zipFile) => {
      fetchPersonalInfo(zipFile!).then(setPersonalInfo);
      fetchAccountInfo(zipFile!).then(setAccountInfo);
      fetchLinkedAccounts(zipFile!).then(setLinkedAccounts);
      fetchFollowers(zipFile!).then(setFollowers);
      fetchFollowing(zipFile!).then(setFollowing);
    });
  }, [zipArrayBuffer]);

  return (
    <div className="px-8 py-4 flex flex-col space-y-4">
      <TopHeader />

      <ProfileCard
        processing={processing}
        personalInfo={personalInfo}
        accountInfo={accountInfo}
        followers={followers}
        following={following}
      />

      <div className="flex flex-row justify-stretch space-x-4 w-full">
        <TopEmojisCard />

        <div className="flex flex-col flex-grow space-y-2">
          <LinkedAccountsCard accounts={linkedAccounts} />
        </div>
      </div>

      <div>
        <FollowerGrowth />
      </div>
    </div>
  );
}
