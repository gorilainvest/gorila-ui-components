/**
 * A interface to provide information about the Icon item
 */
export interface Icon {
  /**
   * Icon name that will be on the folder in the s3 
   */
  name: string;
  /**
   * Icon folder name that will be on the s3 
   */
  folder: string;
  /**
   * tooltip text that will appear on the icon
   */
  tooltipText?: string;
  /**
   * tooltip direction that the tooltip will appear on the icon
   */
  tooltipOrientation?: string;
};
