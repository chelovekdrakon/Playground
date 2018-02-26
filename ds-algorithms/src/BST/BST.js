import Node from './Node';

export default class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = new Node(data);

        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            let parent = null;

            while (true) {
                parent = current;

                if (data < current.data) {
                    current = current.left;

                    if (!current) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;

                    if (!current) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left);
            window.console.log(node.show());
            this.inOrder(node.right);
        }
    }

    preOrder(node = this.root) {
        if (node) {
            window.console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node = this.root) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            window.console.log(node.show());
        }
    }

    getMin(node = this.root) {

        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    getMax(node = this.root) {

        while (node.right) {
            node = node.right;
        }

        return node.data;
    }

    find(data) {
        let current = this.root;

        while (current.data !== data) {
            if (data < current.data) {
                current = current.left
            } else {
                current = current.right;
            }

            if (!current) {
                return null;
            }
        }
        return current;
    }

    showNode(data) {
        const node = this.find(data);

        return node ? node : 'no such data stored';
    }

    // remove(data, node = this.root) {
    //
    //     if (!node) {
    //         return null;
    //     }
    //
    //     if (data === node.data) {
    //
    //         if (!node.left && !node.right) {
    //             return null;
    //         }
    //
    //         if (!node.left) {
    //             return node.right;
    //         }
    //
    //         if (!node.right) {
    //             return node.left;
    //         }
    //
    //         let tempNode = this.getMin(node.right);
    //         node.data = tempNode.data;
    //         node.right = this.remove(tempNode.data, node.right);
    //         return node;
    //     } else if (data < node.data) {
    //         node.left = this.remove(data, node.left);
    //         return node;
    //     } else {
    //         node.right = this.remove(data, node.right);
    //         return node;
    //     }
    // }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (!node) {
            return null;
        }

        if (data === node.data) {

            if (!node.left && !node.right) {
                return null;
            }

            if (!node.left) {
                return node.right;
            }

            if (!node.right) {
                return node.left;
            }

            let tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }

    update(data) {
        const grade = this.find(data);
        grade.count++;
        return grade;
    }

}
