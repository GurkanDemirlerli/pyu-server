export class ProjectTreeItem {
    id: number;
    title: string;
    statuses: StatusTreeItem[];
    statusId?:number;
}

export class StatusTreeItem {
    id: number;
    title: string;
    projects: ProjectTreeItem[];
    tasks: TaskTreeItem[];
}

export class TaskTreeItem {
    id: number;
    statusId:number;
    title: string;
}