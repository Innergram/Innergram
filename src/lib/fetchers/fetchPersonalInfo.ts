import JSZip from "jszip";

import PersonalInfo from "@/interfaces/PersonalInfo";

export default async function fetchPersonalInfo(
  zip: JSZip,
): Promise<PersonalInfo | undefined> {
  const contents = await zip
    .file("personal_information/personal_information.json")
    ?.async("text");
  if (!contents) return;

  const json = JSON.parse(contents);
  const profile_user = json.profile_user[0];

  const profile_photo_path = profile_user.media_map_data["Profile Photo"].uri;

  const profile_photo = profile_photo_path
    ? await zip.file(profile_photo_path)?.async("blob")
    : undefined;

  const string_map_data = profile_user.string_map_data;
  const email_address = string_map_data["Email"].value;
  const phone_number = string_map_data["Phone Number"].value;
  const username = string_map_data["Username"].value;
  const name = string_map_data["Name"].value;
  const bio = string_map_data["Bio"].value;
  const gender = string_map_data["Gender"].value;
  const dob = string_map_data["Date of birth"].value;
  const isPrivateAccount = string_map_data["Private Account"].value === "True";

  return {
    profile_photo,
    email_address,
    phone_number,
    username,
    name,
    bio,
    gender,
    dob,
    isPrivateAccount,
  };
}
