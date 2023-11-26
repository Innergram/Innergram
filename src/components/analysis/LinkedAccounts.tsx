import LinkedAccount from "@/interfaces/LinkedAccount";

import { Card } from "../ui/card";

export default function LinkedAccounts({
    accounts,
  }: {
    accounts: LinkedAccount[] | undefined;
  }) {
    return (
      <Card className="p-4 flex flex-col w-full space-y-4">
        <p className=" text-primary/80 font-seymour-one text-center  text-3xl">
          Linked Meta Accounts
        </p><br></br>
  
        <div className="flex flex-row justify-evenly">
          {accounts?.length === 0 && (
            <p>
              No linked accounts found
            </p>
          )}

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