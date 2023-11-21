import JSZip from "jszip";

import LinkedAccount from "@/interfaces/LinkedAccount";

export default async function fetchLinkedAccounts(zip: JSZip): Promise<LinkedAccount[]> {
  const contents = await zip.file("personal_information/linked_meta_accounts.json")?.async("text");
  if (!contents) return [];

  const json = JSON.parse(contents);

  const accounts: LinkedAccount[] = [];
  for (const acc of json.profile_linked_meta_accounts) {
    const map = acc.string_map_data;

    accounts.push({
      platform: map["Account type"].value,
      username: map["User name"].value
    });
  }

  return accounts;
}