import Chat from "@/interfaces/Chat";
import { Card } from "../ui/card";

const ACCS_LIMIT = 20;

// Function to convert timestamp to Date
function convertTimestampToDate(timestamp: number): Date | null {
  if (timestamp) {
    return new Date(timestamp);
  }
  return null;
}

export default function InactiveAccounts({
  chats,
}: {
  chats: Chat[] | undefined;
}) {
  let sortedChats: Chat[] | undefined;

  if (chats && chats.length > 0) {
    sortedChats = chats.sort((chatA, chatB) => {
      const sentAtA =
        convertTimestampToDate(chatA.messages[0]?.sent_at) || new Date(0);
      const sentAtB =
        convertTimestampToDate(chatB.messages[0]?.sent_at) || new Date(0);

      return sentAtA.getTime() - sentAtB.getTime();
    });
  } else {
    console.error("Chats array is empty or undefined.");
  }

  // Total message accounts
  const totalacc = sortedChats?.length;

  // const sortedchats=chats?.sort((a,b)=>(a.messages[0]?.sent_at-chats[b]["messages"][0]["sent_at"]))
  return (
    <Card className="p-7 flex flex-col w-full space-y-4 ">
      <p className="text-primary/80 text-3xl bold font-seymour-one">
        Least Engaged Accounts
      </p>
      <p className="text-[20px] font-mono bold text-gray-500">
        Showing <span>{ACCS_LIMIT}</span>/<span>{totalacc}</span> Accounts
      </p>
      <div className="">
        <ul>
          {sortedChats?.slice(0, ACCS_LIMIT).map((item, index) => (
            <li key={index} className="text-xl font-seymour-one my-4">
              <span className="py-3 pr-3">{index + 1}</span>
              {item.participants[0]}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
