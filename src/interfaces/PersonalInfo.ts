export default interface PersonalInfo {
    profile_photo: Blob | undefined,
    email_address: string,
    phone_number: string,
    username: string,
    name: string,
    bio: string,
    gender: string,
    dob: string,
    isPrivateAccount: boolean
}