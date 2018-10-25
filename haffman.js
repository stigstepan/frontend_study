var stdin = process.openStdin(); 
stdin.on('data', function(data){ 
 var str = data.toString(); 
    var freq = [];
    var fl = false;
    for(var i in str){
        for(var j in freq){
            if(freq[j].symbol === str[i] && freq[j].symbol !== '\n') {
                freq[j].value++; 
            fl = true;
                break;
            }
        } 
        if(!fl && str[i] !== '\n') {
            freq.push({symbol:str[i], value: 1});
        }
        fl = false;
    }

    freq.sort(compareValue);
    
    var tree = new Tree('root');
    
    tree.add('', 'root', tree.traverseBF);
    var len = freq.length;
    for(i = 0; i < len; i++){
        if(freq.length == 1) break;
        var last = freq.pop();
        var prelast = freq.pop();
        var node = new Node('');
        var nodeA = new Node(last.symbol);
        nodeA.parent = node;
        var nodeB = new Node(prelast.symbol);
        nodeB.parent = node;
        freq.push({symbol:'', value:(last.value+prelast.value)});
        freq.sort(compareValue);
    }

console.log(tree); 
});

function compareValue(wordA, wordB) {
  return wordB.value - wordA.value;
}

// реализация дерева
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

Tree.prototype.traverseDF = function(callback) {

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

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
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

Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callback = function(node) {
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