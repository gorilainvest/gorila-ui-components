// tslint:disable-next-line
import * as nx from "../../../../nx.json";
import { forEachObjIndexed } from "ramda";

export interface SidebarGroup {
  group: string;
  items: SidebarItems;
  label: string;
};
export type SidebarItem = SidebarGroup | string;
export type SidebarItems = (SidebarGroup | SidebarItem)[];

export const getItems = (): SidebarItems => {
  const items = [
    {
      // controls
      group: "controls",
      label: "Controls",
      items: []
    },
    {
      // layout
      group: "layout",
      label: "Layout",
      items: []
    },
    {
      // buttons-indicators
      group: "buttons-indicators",
      label: "Buttons & Indicators",
      items: []
    },
    {
      // popups-modals
      group: "popups-modals",
      label: "Popups & Modals",
      items: []
    },
    {
      // presentational
      group: "presentational",
      label: "Presentationals",
      items: []
    }
  ];

  forEachObjIndexed((value, key) => {
    if (value.tags.length === 0) {
      return;
    }

    let groupTag = value.tags.find(tag => tag.startsWith("group:"));
    if (!groupTag) {
      return;
    }
    groupTag = groupTag.split(":")[1];

    const groupItem = items.find(item => item.group === groupTag);
    const itemKey = key.startsWith("ui-") ? key.substring(3) : key;
    groupItem.items.push(itemKey);
  }, nx.projects);

  return items;
};
