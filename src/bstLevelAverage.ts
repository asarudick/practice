import { Node } from "./Node";

export default function (root?: Node): number[] {
    if (!root) return [];
    
    const queue = [];
    const averages = [];
    
    queue.push(root);

    while (queue.length) {
        // Queue contains the current level in the tree.
        const level: Node[] = [...queue];
        queue.length = 0;

        // Calculate average, and append to result
        const average = level.reduce((memo, node) => memo + node.value, 0) / level.length;
        averages.push(average);

        // Push all children onto queue.
        for (const node of level) {
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }       
    }

    return averages;
}