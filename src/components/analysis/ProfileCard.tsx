import {
  BadgeCheckIcon,
  ExternalLinkIcon,
  PersonStandingIcon,
} from "lucide-react";

import AccountInfo from "@/interfaces/AccountInfo";
import Follower from "@/interfaces/Follower";
import Following from "@/interfaces/Following";
import PersonalInfo from "@/interfaces/PersonalInfo";
import { initials } from "@/lib/utils";

import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Separator } from "../ui/separator";
import Badge from "../Badge";
import Flag from "../Flag";

export default function ProfileCard({
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
