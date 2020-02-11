/**
 * Indicates interface for properties used in modal.
 */
export interface SimpleModalData {
  bodyText?: string;
  bodyHtml?: string;
  bodyImage?: string;
  socialMedia?: boolean;
  socialMediaArray?: SocialMediaArray[];
  noText?: string;
  titleText: string;
  yesText?: string;
}

/**
 * Indicates specific interface for each button in modal.
 */
export interface SocialMediaArray {
  id: string;
  URL: string;
  img: string;
}
