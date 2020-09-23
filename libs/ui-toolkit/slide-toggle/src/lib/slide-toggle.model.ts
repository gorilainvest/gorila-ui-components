/**
 * Define the toogle item for the component.
 */
export interface ToggleData {

  /**
   * The identifier value of the toggle.
   */
  cod: string;


  /**
   * Indicates if the toggle is toggled.
   */
  checked: boolean;


  /**
   * The text to be displayed aside the toggle.
   */
  title: string;


  /**
   * Indicates if the toggle is favorite.
   */
  favorite: boolean;


  /**
   * The custom color for the toggle.
   * @Optional
   */
  color?: string;
}
