export class TreeViewNode {
  id: string;
  text: string;
  storeNumber?: string;
  children?: TreeViewNode[];
  isCollapsed?: boolean;
  isIndeterminate?: boolean;
  isSelected?: boolean;
  parent?: string;
  filter?: boolean;
  d?: any;
  isDisabled?: boolean;
}
