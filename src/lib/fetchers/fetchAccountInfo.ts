import JSZip from "jszip";

import AccountInformation from "@/interfaces/AccountInfo";

export default async function fetchAccountInfo(zip: JSZip): Promise<AccountInformation | undefined> {
  const contents = await zip.file("personal_information/account_information.json")?.async("text");
  if (!contents) return;

  const json = JSON.parse(contents);

  const info = json.profile_account_insights[0].string_map_data;

  const country_code = info["First country code"].value;
  const last_login = info["Last login"].timestamp;

  return {
    country_code,
    last_login
  }
}