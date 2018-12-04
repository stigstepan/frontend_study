function binarySearch(data) {
    label_out.innerHTML = '';
    let strs = data.split("\n");
    let arr = strs[0].split(' ');
    let numArr = [];
    for (let i = 1; i < arr.length; i++) {
        numArr.push(parseInt(arr[i]));
    }
    let nums = strs[1].split(' ');
    let end = parseInt(arr[0]);
    let start = 0;
    for (let i = 1; i <= parseInt(nums[0]); i++) {
        label_out.innerHTML += find(numArr, parseInt(nums[i]), start, end) + ' ';
    }

}

function find(arr, num, start, end) {
    let mid = Math.floor((start + (end - start) / 2));
    if (num == arr[mid]) return mid + 1;
    if (end - 1 === start) return -1;
    if (num > arr[mid]) return find(arr, num, mid, end);
    if (num < arr[mid]) return find(arr, num, start, mid);
}
