function haffmanDecode(data) {
    try {
        var str = data.toString().split('\n');

        if (isNaN(str[0].split(' ')[0] || isNaN(str[0].split(' ')[1]))) throw "Символы в первой строке не являются целыми числами";

        var cntOfSmbl = parseInt(str[0].split(' ')[0]);
        var strLen = parseInt(str[0].split(' ')[1]);
        var codeStr = str[cntOfSmbl + 1];
        if (!codeStr) throw "Символов меньше, чем указано на первой строке";

        var codes = [];

        for (var i = 1; i < cntOfSmbl + 1; i++) {
            codes.push({
                symbol: str[i].split(': ')[0],
                code: str[i].split(': ')[1]
            });
        }

        var tmp = '';
        var res = '';

        for (i in codeStr) {
            tmp += codeStr[i];
            if (findSymbol(tmp, codes)) {
                res += findSymbol(tmp, codes);
                tmp = '';
            }
        }

        label_out.innerHTML = res || 'Некорректный ввод.';
    } catch (e) {
        label_out.innerHTML = e;
        return;
    }
}

function findSymbol(code, codes) {
    for (var c in codes) {
        if (code == codes[c].code) return codes[c].symbol;
    }
    return 0;
}