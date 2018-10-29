function haffman(data) {
    var str = data.toString();
    str = str.replace(/\n/g, '');
    var freq = [];
    var fl = false;
    for (var i in str) {
        for (var j in freq) {
            if (freq[j].symbol === str[i] && freq[j].symbol !== '\n') {
                freq[j].value++;
                fl = true;
                break;
            }
        }
        if (!fl && str[i] !== '\n') {
            freq.push({
                symbol: str[i],
                value: 1
            });
        }
        fl = false;
    }

    freq.sort(compareValue);

    var tree = new Tree('root');

    tree.add('', 'root', tree.traverseBF);

    var len = freq.length;
    if (len == 1) {
        var nd = freq.pop();
        var codes = [{
            symbol: nd.symbol,
            code: '0'
        }];
    } else {
        // build tree
        for (i = 0; i < len; i++) {
            var last = freq.pop();
            var prelast = freq.pop();

            var parentNode = new Node('');

            var nodeA = (typeof (last.symbol) === "string") ? (new Node(last.symbol)) : (last.symbol);
            var nodeB = (typeof (prelast.symbol) === "string") ? (new Node(prelast.symbol)) : (prelast.symbol);

            nodeB.parent = parentNode;
            nodeA.parent = parentNode;
            parentNode.children.push(nodeA);
            parentNode.children.push(nodeB);

            freq.push({
                symbol: parentNode,
                value: (last.value + prelast.value)
            });
            freq.sort(compareValue);

            if (freq.length == 1) {
                tree._root = parentNode;
                break;
            }
        }
        var codes = [];
        getCodesFromTree(tree._root, '', codes);
    }

    // Coding
    var codeStr = '';
    for (i in str) {
        codeStr += findCode(str[i], codes);
    }

    // Output
    label_out.innerHTML = len + ' ' + codeStr.length + '<br \/>';
    for (i in codes) {
        label_out.innerHTML += codes[i].symbol + ': ' + codes[i].code+ '<br \/>';
    }
    label_out.innerHTML += codeStr;

}

// Help functions
function findCode(symbol, codes) {
    for (var k in codes) {
        if (codes[k].symbol == symbol) return codes[k].code;
    }
}

function getCodesFromTree(node, path, codes) {
    if (node.data != '') {
        codes.push({
            symbol: node.data,
            code: path
        });
        return;
    } else {
        getCodesFromTree(node.children[0], path + '0', codes);
        getCodesFromTree(node.children[1], path + '1', codes);
    }
    return codes;
}

function compareValue(wordA, wordB) {
    return wordB.value - wordA.value;
}

// реализация дерева
function Node(str) {
    this.data = str;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function (callback) {

    // это рекурсивная и мгновенно вызываемая функция
    (function recurse(currentNode) {
        // шаг 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // шаг 3
            recurse(currentNode.children[i]);
        }

        // шаг 4
        callback(currentNode);

        // шаг 1
    })(this._root);

};

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while (currentTree) {
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function (callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function (data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

Tree.prototype.remove = function (data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callback = function (node) {
        if (node.data === fromData) {
            parent = node;
        }
    };

    this.contains(callback, traversal);

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }

    return childToRemove;
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }

    return index;
}

// реализация очереди
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function () {
    return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function (data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

Queue.prototype.dequeue = function () {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;

    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deletedData;
    }
};
