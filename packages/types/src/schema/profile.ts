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

export interface ISocial extends IBaseModelAttributes {
  name: SocialMediasEnum;
  url: string;
}

export enum SocialMediasEnum {
  FACEBOOK = "facebook",
  LinkedIn = "linkedin",
}

export interface IProject extends IBaseModelAttributes {
  name: string;
  link: string;
  description: string;
}

export interface IProfileStyle {
  primaryColor: string;
}

export interface IEducation extends IBaseModelAttributes {}
export interface ILanguage extends IBaseModelAttributes {
  name: string;
  /**
   * proficiency will be number between 0 and 10, based on that number label can be made
   */
  proficiency: number;
}

export interface ICompany extends IBaseModelAttributes {
  companyName: string;
  industry: string;
  jobTitle: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorksHere: boolean;
}

export interface IAward extends IBaseModelAttributes {
  title: string;
  name: string;
  awardedOn: Date;
  description: string;
}
export interface ICertificates extends IBaseModelAttributes {
  title: string;
  name: string;
  issuedBy: string;
  awardedOn: Date;
}
