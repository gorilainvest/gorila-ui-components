import { InjectionToken } from '@angular/core';

/**
 * Primary base URL/path for retrieving icons.
 */
export const ICON_BASE_SRC = new InjectionToken<string>(
  'BaseSourceForIcons'
);
