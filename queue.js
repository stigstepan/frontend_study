const _top = 0;

function queue(data) {
    try {
        let strs = data.toString().split("\n");
        let cnt = parseInt(strs[0]);


        const heap = new PriorityQueue();

        // let's do commands
        label_out.innerHTML = "";
        for (let i = 1; i < cnt + 1; i++) {
            let splt = strs[i].split(' ');
            if (splt[1]) heap.push(splt[1]);
            else label_out.innerHTML += heap.pop() + '<br \/>';
        }
    } catch (e) {
        label_out.innerHTML = "Некорректный ввод.";
        return;
    }
}

// массив с приоритетами на основе кучи


class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[_top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > _top) {
            this._swap(_top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[_top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > _top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = _top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

function parent(i) {
    return ((i + 1) >>> 1) - 1;
}

function left(i) {
    return (i << 1) + 1;
}

function right(i) {
    return (i + 1) << 1;
}