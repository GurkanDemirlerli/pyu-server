export class ProjectTreeItem {
  id: number;
  title: string;
  path: string;
  lvl: string; //number olacak
  firstParentId: number;
  parentId: number;
  status__id:number;
  status__title:number;
  task__id:number;
  task__title:number
  parent?: ProjectTreeItem;
  children?: ProjectTreeItem[];
}
