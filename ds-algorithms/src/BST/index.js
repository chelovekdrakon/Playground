import BST from './BST';

export function testBST() {
    const tree = new BST();

    tree.insert(23);
    tree.insert(45);
    tree.insert(16);
    tree.insert(37);
    tree.insert(3);
    tree.insert(99);
    tree.insert(22);

    window.console.log(tree.inOrder());
    window.console.log(tree.preOrder());
    window.console.log(tree.postOrder());

    window.console.log(tree.getMin());
    window.console.log(tree.getMax());

    window.console.log(tree.showNode(3));
    window.console.log(tree.showNode(99));
    window.console.log(tree.showNode(0));

    window.console.log(tree.remove(16));
    window.console.log(tree.inOrder());
}



function prArray(arr) {
    window.console.log(arr[0]);

    for (let i = 1; i < arr.length; ++i) {
        window.console.log(arr[i]);
    }
}

function genArray(length) {
    const arr = [];

    for (let i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}
