export interface TreeViewModel {
    label: string;
    data: any;
    expandedIcon: string;
    collapsedIcon: string;
    icon: string;
    type: number;
    children: TreeViewModel[];
}