var start_button = document.getElementById("data-submit");
start_button.addEventListener("click", start); 
var list = document.getElementById('list');
list.addEventListener("change", select_item);
var label_in = document.getElementById('data-in');
var help = document.getElementById('help');
// import {euclid} from "./euclid.js";
// import {fibonach} from "./fibonach";


function start() {
    
    let alg = list.options[list.selectedIndex].value;
    switch(alg)
    {
        case "Euclid":{
            euclid(label_in.value);
        } break;
        case "Fibonach":{
            fibonach(label_in.value);
        } break;
        case "Segments":{
            segments(label_in.value);
        } break;
        case "Backpack":{
            backpack(label_in.value);
        }
    }
}

function select_item(){
    switch ( list.options[list.selectedIndex].value) {
        case "Fibonach":{
            label_in.value = "15";
            help.value = "Дано целое число 1≤n≤30, необходимо вычислить n-е число Фибоначчи.";
        } break;
        case "Euclid":{
            label_in.value = "20 32";
            help.value = "По данным двум числам 1≤a,b≤2⋅10^9 найдите их наибольший общий делитель.";
        }  break;
        case "Segments":{
            label_in.value = "4\n4 7\n1 3\n2 5\n5 6"
            help.value = "По данным n отрезкам необходимо найти множество точек минимального размера, для которого каждый из отрезков содержит хотя бы одну из точек.\nВ первой строке дано число 1≤n≤100 отрезков. Каждая из последующих n строк содержит по два числа 0≤l≤r≤10^9, задающих начало и конец отрезка. Выведите оптимальное число m точек и сами m точек. Если таких множеств точек несколько, выведите любое из них.";
        } break;
        case "Backpack":{
            label_in.value = "3 50\n60 20\n100 50\n120 30"
            help.value = "Первая строка содержит количество предметов 1≤n≤10^3\nи вместимость рюкзака 0≤W≤2⋅10^6. \nКаждая из следующих n строк задаёт стоимость 0≤ci≤2⋅10^6\ и объём 0<wi≤2⋅10^6 предмета (n, W, ci, wi— целые числа). \nВыведите максимальную стоимость частей предметов (от каждого предмета можно отделить любую часть, стоимость и объём при этом пропорционально уменьшатся), помещающихся в данный рюкзак, с точностью не менее трёх знаков после запятой.";
        }break;
    }
}