import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JsZip from "jszip";

import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

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
        </>
      ) : (
        <>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <p>@shadcn</p>

            <p>I own a computer.</p>
          </div>

          <div className="flex flex-col flex-grow items-end">
            <p>Followers: 11.2k</p>
            <p>Following: 500</p>
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
