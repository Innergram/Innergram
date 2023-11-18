import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JsZip from "jszip";
import { BadgeCheckIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

function ProfileCard({ processing }: { processing: boolean }) {
  return (
    <Card className="flex flex-row p-4 items-center space-x-4">
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

                  <TooltipContent>
                    AKA Shadcn
                  </TooltipContent>
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
              <p>Followers: <span className="text-primary">11.2k</span></p>
              
              <Separator orientation="vertical" className="h-5" />

              <p>Following: <span className="text-primary">500</span></p>
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
          Your Analysis
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

  let { zipArrayBuffer }: { zipArrayBuffer: ArrayBuffer | undefined } = location.state;

  const [processing, setProcessing] = useState(false);
  const [zipFile, setZipFile] = useState<JsZip>();

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
    </div>
  );
}
