export type ContactsType = {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
};
export type PhotosType = {
    small: string | null
    large: string | null
};
export type ProfileType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosType;
};
export type PostType = {
    id: number
    message: string | object
    likesCount: number
    dislikeCount: number
};
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: any
    photos: PhotosType
    status: string
    followed: boolean
  }