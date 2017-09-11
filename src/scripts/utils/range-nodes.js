import { nextNode } from './node-sibling';
import isTextNode from './is-text-node';

function rangeNodes(range) {
    let nodes = [],
        node,
        endNode;

    if (range) {
        node = range.startContainer;
        endNode = range.endContainer;
    } else {
        return nodes;
    }

    nodes.push(node);
    if (node === endNode) {
        return nodes;
    }

    while (node && node !== endNode) {
        node = nextNode(node);
        if (isTextNode(node)) {
            nodes.push(node);
        }
    }
    return nodes;
}

export default rangeNodes;