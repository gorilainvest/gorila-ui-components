export interface UiSimpleModalData {
  bodyText?: string;
  bodyHtml?: string;
  bodyImage?: string;
  socialMedia?: boolean;
  socialMediaArray?: SocialMediaArray[]; 
  noText?: string;
  titleText: string;
  yesText?: string;
}

export interface SocialMediaArray {
  id: string;
  URL: string;
  img: string;
}
