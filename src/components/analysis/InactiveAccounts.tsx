import Chat from '@/interfaces/Chat';
import { Card } from "../ui/card";


export default function InactiveAccounts({
    chats,
  }: {
    chats: Chat[] | undefined;
  }) {
    // console.log( chats? chats:null,"chatss");
    let sortedChats: Chat[] | undefined;
   
    
    if (chats && chats.length > 0) {
          sortedChats = chats.sort((chatA, chatB) => {
          const sentAtA = convertTimestampToDate(chatA.messages[0]?.sent_at) || new Date(0);
          const sentAtB = convertTimestampToDate(chatB.messages[0]?.sent_at) || new Date(0);
      
          return sentAtA.getTime() - sentAtB.getTime();
        });
      
        // console.log("Sorted Chats:");
        for (const chat of sortedChats) {
          // console.log(`Participants: ${chat.participants.join(', ')}`);
          // console.log(`First Message Sent At: ${convertTimestampToDate(chat.messages[0]?.sent_at)}`);
          // console.log("---");
        }
      } else {
        // console.log("Chats array is empty or undefined.");
      }
      
      // Function to convert timestamp to Date
      function convertTimestampToDate(timestamp: number): Date | null {
        if (timestamp) {
          return new Date(timestamp);
        }
        return null;
      }
      //total messege accounts
      let totalacc=sortedChats?.length;
      
    
    // const sortedchats=chats?.sort((a,b)=>(a.messages[0]?.sent_at-chats[b]["messages"][0]["sent_at"]))
    return (
      <Card className="p-7 flex flex-col w-full space-y-4 ">
        <p className=" text-primary/80 text-3xl  bold font-seymour-one">
          Least Engaged Accounts
        </p>
        <p className='text-[20px] font-mono bold text-gray-500'>Showing <span>{totalacc}</span>/<span>{totalacc}</span> Accounts</p>
        <div className=''>
        <ul>
            {sortedChats?.map((item,index)=>(<li key={index} className='text-xl font-seymour-one my-4' ><span className='py-3 pr-3'>{index+1}</span>{item.participants[0]}</li>))}
        </ul>

        </div>
        
  
        
      </Card>
    );
  }