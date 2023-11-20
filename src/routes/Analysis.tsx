import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JsZip from "jszip";
import { BadgeCheckIcon, ExternalLinkIcon } from "lucide-react";

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

function LinkedAccountsCard() {
  const accounts = [
    {
      name: "Facebook",
      icon: "https://www.facebook.com/favicon.ico",
      url: "https://facebook.com/shadcn",
    },
    {
      name: "Threads",
      icon: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082023/screen_shot_2023-08-11_at_2.20.24_pm.png?eI_UtE0Cw_RleVmlqEu__hq0uJabwyGl&itok=4KkDNPuY",
      url: "https://threads.net/shadcn",
    },
    {
      name: "Instagram",
      icon: "https://www.instagram.com/favicon.ico",
      url: "https://instagram.com/shadcn",
    }
  ];

  return (
    <Card className="p-4 flex flex-col w-full space-y-4">
      <p className="font-marker text-primary/80 text-2xl">
        Linked Meta Accounts
      </p>

      <div className="flex flex-row justify-evenly items-center">
        {accounts.map((account) => (
          <a
            href={account.url}
            className="flex flex-col justify-center items-center"
          >
            <img src={account.icon} alt={account.name} className="h-8 w-8 mb-1" />

            <p>{account.name}</p>
          </a>
        ))}
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
        <p className="text-primary/80 font-marker text-4xl">
          Your Top Emojis
        </p>
      </div>
      

      <div className="grid grid-cols-5">
        {emojis.map((emoji) => (
          <div className="flex flex-col items-center space-y-1">
            <p className="text-6xl">{emoji}</p>
            <p className="text-primary/80 font-mono text-sm">12.3k</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function ProfileCard({ processing }: { processing: boolean }) {
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
          <a href="https://instagram.com/shadcn" target="_blank">
            <ExternalLinkIcon className="absolute top-0 right-0 text-primary/30 hover:text-primary" />
          </a>

          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <div className="flex flex-row space-x-2 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-xl text-primary font-mono">@shadcn</p>
                  </TooltipTrigger>

                  <TooltipContent>AKA Shadcn</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Separator orientation="vertical" className="h-5" />

              <BadgeCheckIcon className="text-accent" />
              <BadgeCheckIcon className="text-accent" />
              <BadgeCheckIcon className="text-accent" />
            </div>

            <p>I own a computer.</p>
          </div>

          <div className="flex flex-col flex-grow items-end gap-1">
            <div className="flex flex-row gap-2 items-center">
              <p>
                Followers: <span className="text-primary">11.2k</span>
              </p>

              <Separator orientation="vertical" className="h-5" />

              <p>
                Following: <span className="text-primary">500</span>
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
        <h1 className="text-4xl font-bold font-marker text-primary">
          InstaAnalysis
        </h1>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
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
  const [_zipFile, setZipFile] = useState<JsZip>();

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

    new JsZip().loadAsync(zipArrayBuffer).then(setZipFile);
  }, [zipArrayBuffer]);

  return (
    <div className="px-8 py-4 flex flex-col space-y-4">
      <TopHeader />

      <ProfileCard processing={processing} />

      <div className="flex flex-row justify-stretch space-x-4 w-full">
        <TopEmojisCard />

        <div className="flex flex-col flex-grow space-y-2">
          <LinkedAccountsCard />
          <LinkedAccountsCard />
        </div>
      </div>
    </div>
  );
}
