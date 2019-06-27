export class ProjectTreeItem {
  id: number;
  title: string;
  path: string;
  lvl: string; //number olacak
  firstParentId: number;
  parentId: number;
  parent?: ProjectTreeItem;
  children?: ProjectTreeItem[];
}
