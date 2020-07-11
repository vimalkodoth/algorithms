function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

class BST {
    constructor(value) {
        this.children = [];
        this.root = new Node(value);
    }

    insert(value) {
        let node = this.root,
        parent = null;
        while (node !== null) {
        if (value <= node.value) {
            parent = node;
            node = node.left;
        } else {
            parent = node;
            node = node.right;
        }
        }
        if (value > parent.value) {
        parent.right = new Node(value);
        } else {
        parent.left = new Node(value);
        }
    }

    contains(value) {
        let node = this.root;
        while (node !== null) {
        if (node.value === value) return true;
        if (value > node.value) {
            node = node.right;
        } else {
            node = node.left;
        }
        }
        return false;
    }

    inOrder(node) {
        if (node === null) return;
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    preOrder(node) {
        if (node === null) return;
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node) {
        if (node === null) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.value);
    }

    deleteMin() {
        var node = this.root,
        parent = null;
        while (node.left !== null) {
        parent = node;
        node = node.left;
        }
        if (node.right) {
        parent.left = node.right;
        } else {
        parent.left = null;
        }
    }
    deleteMax() {
        var node = this.root,
        parent = null;
        while (node.right !== null) {
        parent = node;
        node = node.right;
        }
        if (!parent) {
        this.root = node.left;
        } else if (parent.left === node) {
        parent.left = null;
        } else {
        parent.right = null;
        }
    }
    getMin(node) {
        if (!node) {
        return null;
        }
        const parent = null;
        while (node.left !== null) {
        parent = node;
        node = node.left;
        }
        return { node, parent };
    }
    delete(value) {
        var node = this.root,
        parent = null;
        while (node && node.value !== value) {
        if (value < node.value) {
            parent = node;
            node = node.left;
        } else {
            parent = node;
            node = node.right;
        }
        }
        if (node === null) return;
        //case 1 node is the leaf node.
        if (node.left === null && node.right === null) {
        if (node === root || parent === null) {
            this.root = null;
        } else if (parent.left === node) {
            parent.left = null;
        } else {
            parent.right = null;
        }
        }
        //case 2 node has 1 child
        else if ((node.left && !node.right) || (node.right && !node.left)) {
        if (node.left) {
            if (node === this.root) {
            this.root = node.left;
            } else if (parent.left === node) {
            parent.left = node.left;
            } else {
            parent.right = node.left;
            }
        } else {
            if (node === this.root) {
            this.root = node.right;
            } else if (parent.left === node) {
            parent.left = node.right;
            } else {
            parent.right = node.right;
            }
        }
        } else {
        //case 3 node has 2 children
        const { node: min, parent: pMin } = this.getMin(node.right) || node.right;
        // console.log(min, node);
        min.left = node.left;
        if (min.right == null && min !== node.right) {
            min.right = node.right;
        }

        if (parent && parent.right === node) {
            parent.right = min;
        } else if (parent) {
            //there is parent
            parent.left = min;
        } else {
            //node without a parent is a root element
            this.root = min;
        }
        //remove reference from min's parent as it moves to deleted's position
        if (pMin) {
            pMin.left = null;
        }
        node.left = null;
        node.right = null;
        }
    }
}

let bst = new BST(10);

bst.insert(9);
bst.insert(9);
bst.insert(1);
bst.insert(2);

bst.postOrder(bst.root);
console.log("----");
bst.root;
bst.delete(9);
bst.postOrder(bst.root);