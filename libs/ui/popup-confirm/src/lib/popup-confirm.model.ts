/**
 * Define an action (button) in the popup confirm template.
 */
export interface PopupConfirmAction {
  /**
   * Additional css class to be added to action button.
   */
  class: string;

  /**
   * The text of the action.
   */
  text: string;

  /**
  * The value that identified a click in the action.
  */
  value: string;
}

/**
 * Define the content of a popup.
 */
export interface PopupConfirmContent {
  /**
   * A list of actions (buttons) to be displayed in the modal footer.
   */
  actions: PopupConfirmAction[];

  /**
   * Additional css class to be added to content `DIV`.
   */
  class?: string;

  /**
   * A teext to be displayed between separators line.
   *
   * The separator will exist between popup title and content.
   */
  separator?: string;

  /**
   * The popup dialog content itself.
   */
  text: string;
}

/**
 * The model for the popup.
 *
 * @see MAT_DIALOG_DATA
 */
export interface PopupConfirmModel {
  /**
   * A list of content to be displayed inside popup.
   */
  content: PopupConfirmContent[];
  title: string;
}
