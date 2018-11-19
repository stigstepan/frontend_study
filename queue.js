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
    constructor() {
        this._heap = [];
    }
    size() {
        return this._heap.length;
    }
    push(value) {
        this._heap.push(parseInt(value));
        this._siftUp();
    }
    pop() {
        const poppedValue = this._heap[0];
        const bottom = this.size() - 1;
        if (bottom > 0) {
            this._swap(0, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    _greater(i, j) {
        return this._heap[i] > this._heap[j];
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > 0 && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = 0;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

function parent(i) {
    return Math.floor((i - 1) / 2);
}

function left(i) {
    return (i * 2) + 1;
}

function right(i) {
    return (i * 2) + 2;
}