function fibonachHard(data) {
    try {
        let nums = data.split(' ');
        n = parseInt(nums[0]);
        m = parseInt(nums[1]);
        if (isNaN(n) || isNaN(m)) throw "not a number";

        var fibPrev = 0;
        var fib = 1;
        var cached = [fibPrev, fib];

        for (var curr = 1; curr < n; curr++) {
            fibOld = fib;
            fib = (fib + fibPrev) % m;
            fibPrev = fibOld;

            if (fibPrev == 0 && fib == 1) {
                cached.pop();
                break;
            } else {
                cached.push(fib);
            }
        }

        var offset = n % cached.length;
        label_out.innerHTML = cached[offset];

    } catch (e) {
        label_out.innerHTML = "Некорректный ввод.";
        return;
    }
}