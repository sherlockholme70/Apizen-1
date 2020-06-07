export class TreeNode {
    value: TreeNode[];
    key: string;
}

export class TreeFlatNode {
    value: string;
    level: number;
    expandable: boolean;
    jsonPath: String;
}
