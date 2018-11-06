function queue(data) {
    try {
        let strs = data.toString().split("\n");
        let cnt = parseInt(strs[0]);
        let que = [];
        // let's do commands
        for (let i = 1; i < cnt + 1; i++) {
            let splt = strs[i].split(' ');
            if (splt[1]) insert(que, splt[1]);
            else extractMax(que);
        }
    } catch (e) {
        label_out.innerHTML = "Некорректный ввод.";
        return;
    }
}

function insert(que, num) {
    for (let i = 0; i < que.lenght; i++) {

    }

}

function extractMax(que) {
    let max = que.reverse().pop();
        label_out.innerHTML += max + '<br \/>';
}