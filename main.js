// start button
var start_button = document.getElementById("data-submit");
start_button.addEventListener("click", start);
// mode buttons
var start_1mod_button = document.getElementById("first_mod");
start_1mod_button.addEventListener("click", start_1mod);
var start_2mod_button = document.getElementById("second_mod");
start_2mod_button.addEventListener("click", start_2mod);
var afterChoosingDiv = document.getElementById("afterChoosing");
// list
var list = document.getElementById('list');
list.addEventListener("change", select_item);

let label_out = document.getElementById('data-out');
var label_in = document.getElementById('data-in');
// var label_out = document.getElementById('data-out');
var help = document.getElementById('about_algoritm');
var algoritmName = document.getElementById('algoritm_name');

// import {euclid} from "./euclid.js";
// import {fibonach} from "./fibonach";


function start() {
    let alg = list.options[list.selectedIndex].value;
    switch (alg) {
        case "Euclid":
            {
                euclid(label_in.value);
            }
            break;
        case "FibonachHard":
            {
                fibonachHard(label_in.value);
            }
            break;
        case "Segments":
            {
                segments(label_in.value);
            }
            break;
        case "Backpack":
            {
                backpack(label_in.value);
            }
            break;
        case "Terms":
            {
                terms(label_in.value);
            }
            break;
        case "Queue":
            {
                queue(label_in.value);
            }
            break;
    }
}

function select_item() {
    label_out.innerHTML = "Нажмите кнопку запуска алгоритма.";
    afterChoosingDiv.style.display = 'block';
    enableStartButton(true);
    switch (list.options[list.selectedIndex].value) {
        case "Fibonach":
            {
                label_in.value = "15";
                help.innerHTML = "1 режим: <br \/>Дано целое число 1≤n≤30, необходимо вычислить n-е число Фибоначчи.<br \/>2 режим: <br \/>Дано число 1≤n≤10^7, необходимо найти последнюю цифру n-го числа Фибоначчи.";
                enableStartButton(false);
                algoritmName.innerHTML = "Числа Фибоначчи.";
            }
            break;
        case "FibonachHard":
            {
                label_in.value = "10 2";
                help.innerHTML = "Даны целые числа 1≤n≤10^18 и 2≤m≤10^5, необходимо найти остаток от деления n-го числа Фибоначчи на m.";
                algoritmName.innerHTML = "Числа Фибоначчи с остатком.";
            }
            break;
        case "Euclid":
            {
                label_in.value = "20 32";
                help.innerHTML = "По данным двум числам 1≤a,b≤2⋅10^9 найдите их наибольший общий делитель.";
                algoritmName.innerHTML = "Алгоритм Евклида.";
            }
            break;
        case "Segments":
            {
                label_in.value = "4\n4 7\n1 3\n2 5\n5 6";
                help.innerHTML = "По данным n отрезкам необходимо найти множество точек минимального размера, для которого каждый из отрезков содержит хотя бы одну из точек.<br \/>В первой строке дано число 1≤n≤100 отрезков. Каждая из последующих n строк содержит по два числа 0≤l≤r≤10^9, задающих начало и конец отрезка. Выведите оптимальное число m точек и сами m точек. Если таких множеств точек несколько, выведите любое из них.";
                algoritmName.innerHTML = "Покрытие отрезков.";
            }
            break;
        case "Backpack":
            {
                label_in.value = "3 50\n60 20\n100 50\n120 30";
                help.innerHTML = "Первая строка содержит количество предметов 1≤n≤10^3<br \/>и вместимость рюкзака 0≤W≤2⋅10^6. <br \/>Каждая из следующих n строк задаёт стоимость 0≤ci≤2⋅10^6<br \/> и объём 0 < wi ≤ 2⋅10^6 предмета (n, W, ci, wi— целые числа). <br \/>Выведите максимальную стоимость частей предметов (от каждого предмета можно отделить любую часть, стоимость и объём при этом пропорционально уменьшатся), помещающихся в данный рюкзак, с точностью не менее трёх знаков после запятой.";
                algoritmName.innerHTML = "Алгоритм Рюкзак.";
            }
            break;
        case "Terms":
            {
                label_in.value = "15";
                help.innerHTML = "По данному числу 1≤n≤10^9 найдите максимальное число k, для которого n можно представить как сумму k различных натуральных слагаемых. Выведите в первой строке число k, во второй — k слагаемых.";
                algoritmName.innerHTML = "Разные слагаемые.";
            }
            break;
        case "Haffman":
            {
                label_in.value = "Encode...";
                help.innerHTML = "По данной непустой строке s длины не более 104, состоящей из строчных букв латинского алфавита, строит оптимальный беспрефиксный код. В первой строке выводит количество различных букв k, встречающихся в строке, и размер получившейся закодированной строки. В следующих k строках запишите коды букв в формате 'letter: code'. В последней строке выведите закодированную строку.";
                enableStartButton(false);
                algoritmName.innerHTML = "Алгоритм кодирования данных Хаффмана.";
            }
            break;
        case "Queue":
            {
                label_in.value = "6\nInsert 200\nInsert 10\nExtractMax\nInsert 5\nInsert 500\nExtractMax";
                help.innerHTML = "Первая строка входа содержит число операций 1≤n≤10^5. Каждая из последующих n строк задают операцию одного из следующих двух типов:<br \/>\nInsert x, где 0≤x≤10^9 — целое число;<br \/>ExtractMax.";
                algoritmName.innerHTML = "Очередь с приоритетом.";
            }
            break;
    }
}

function start_1mod() {
    switch (list.options[list.selectedIndex].value) {
        case "Fibonach":
            {
                fibonach(label_in.value, false);
            }
            break;
        case "Haffman":
            {
                haffman(label_in.value);
            }
    }
}

function start_2mod() {
    switch (list.options[list.selectedIndex].value) {
        case "Fibonach":
            {
                fibonach(label_in.value, true);
            }
            break;
        case "Haffman":
            {
                if (label_out.innerHTML == 'Нажмите кнопку запуска алгоритма.') label_in.value = '4 14\na: 0\nb: 10\nc: 110\nd: 111\n01001100100111';
                haffmanDecode(label_in.value);
            }
    }
}

function enableStartButton(mode) {
    if (!mode) {
        start_1mod_button.style.display = 'inline';
        start_2mod_button.style.display = 'inline';
        start_button.style.display = 'none';
    } else {
        start_1mod_button.style.display = 'none';
        start_2mod_button.style.display = 'none';
        start_button.style.display = 'block';
    }
}