export interface SidebarGroup {
  group: string;
  items: SidebarItems;
  label: string;
};
export type SidebarItem = SidebarGroup | string;
export type SidebarItems = (SidebarGroup | SidebarItem)[];

export const items: SidebarItems = [
  { // controls
    group: 'controls',
    label: 'Controls',
    items: [
      'slide-toggle',
    ]
  },
  { // layout
    group: 'layout',
    label: 'Layout',
    items: [
      'card-container',
      'enhanced-title',
      'section-title'
    ]
  },
  { // buttons-indicators
    group: 'buttons-indicators',
    label: 'Buttons & Indicators',
    items: [
      'button',
      'countdown-button',
      'loading',
      'spinner'
    ]
  },
  { // popups-modals
    group: 'popups-modals',
    label: 'Popups & Modals',
    items: [
      'popup-confirm'
    ]
  },
  { // presentational
    group: 'presentational',
    label: 'Presentationals',
    items: [
      'arrow-variation'
    ]
  }
];
