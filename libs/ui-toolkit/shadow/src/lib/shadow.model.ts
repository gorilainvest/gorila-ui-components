/**
 * Available shadow types.
 */
export enum ShadowType {
  DEFAULT = 'default-shadow',
  HEADER = 'header-shadow',
  FOOTER = 'footer-shadow',
  TABLE = 'table-shadow',
  GRAPH = 'graph-shadow',
  CARD_CONTAINER = 'card-container-shadow',
};

/**
 * Returns an array containing possible shadow type values.
 */
export const getShadowTypes = () => {
  const types = [];
  for (const type of Object.keys(ShadowType)) {
    types.push(ShadowType[type]);
  }
  return types;
}
