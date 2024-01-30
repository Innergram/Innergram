import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JsZip from "jszip";

import fetchPersonalInfo from "@/lib/fetchers/fetchPersonalInfo";
import fetchAccountInfo from "@/lib/fetchers/fetchAccountInfo";
import AccountInfo from "@/interfaces/AccountInfo";
import PersonalInfo from "@/interfaces/PersonalInfo";
import fetchLinkedAccounts from "@/lib/fetchers/fetchLinkedAccounts";
import LinkedAccount from "@/interfaces/LinkedAccount";
import fetchFollowers from "@/lib/fetchers/fetchFollowers";
import Follower from "@/interfaces/Follower";
import Following from "@/interfaces/Following";
import fetchFollowing from "@/lib/fetchers/fetchFollowing";

import FollowerGrowth from "@/components/analysis/FollowerGrowth";
import InactiveAccounts from "@/components/analysis/InactiveAccounts";
import TopHeader from "@/components/TopHeader";
import ProfileCard from "@/components/analysis/ProfileCard";
import TopEmojis from "@/components/analysis/TopEmojis";
import LinkedAccounts from "@/components/analysis/LinkedAccounts";
import fetchChats from "@/lib/fetchers/fetchChats";
import Chat from "@/interfaces/Chat";
import TopKeywords from "@/components/analysis/TopKeywords";

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
  const [chats, setChats] = useState<Chat[]>();

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
      fetchChats(zipFile!).then(setChats)
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
        <TopEmojis chats={chats} />

        <div className="flex flex-col flex-grow space-y-5">
          <LinkedAccounts accounts={linkedAccounts} />

          <TopKeywords chats={chats} from={personalInfo?.name || ""} />
        </div>
      </div>

      <div>
        <FollowerGrowth followers={followers} />
      </div>

      <div className=" max-w-fit">
        <InactiveAccounts chats={chats}  />
      </div>
    </div>
  );
}
