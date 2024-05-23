import { IBaseModelAttributes } from "../types";

export interface IProfile extends IBaseModelAttributes {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  aboutMe: string;
  profilePhotoUrl: string;
  coverPhotoUrl: string;
  logoUrl: string;
  socialMedias: ISocial[];
  projects: IProject[];
  profileStyle: IProfileStyle;
  educations: IEducation[];
  languages: ILanguage[];
  companies: ICompany[];
  skills: string[];
  awards: IAward[];
  certificates: ICertificates[];
  hobbies: string[];
}

export interface ISocial {
  name: SocialMediasEnum;
  url: string;
}

export enum SocialMediasEnum {
  FACEBOOK = "facebook",
  LinkedIn = "linkedin",
}

export interface IProject {
  name: string;
  link: string;
  description: string;
}

export interface IProfileStyle {
  primaryColor: string;
}

export interface IEducation {}
export interface ILanguage {
  name: string;
  /**
   * proficiency will be number between 0 and 10, based on that number label can be made
   */
  proficiency: number;
}

export interface ICompany {
  companyName: string;
  industry: string;
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorksHere: boolean;
}

export interface IAward {
  title: string;
  name: string;
  awardedOn: Date;
  description: string;
}
export interface ICertificates {
  title: string;
  name: string;
  issuedBy: string;
  awardedOn: Date;
}
