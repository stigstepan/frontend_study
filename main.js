var start_button = document.getElementById("data-submit");
start_button.addEventListener("click", start); 
var list = document.getElementById('list');
list.addEventListener("change", select_item);
var label_in = document.getElementById('data-in');
// import {euclid} from "./euclid.js";
// import {fibonach} from "./fibonach";


function start() {
    let parseStr = label_in.value.split(' ');
    for(let i = 0; i< parseStr.length; i++){
        parseStr[i] = parseInt(parseStr[i]);
    }
    let alg = list.options[list.selectedIndex].value;
    switch(alg)
    {
        case "Euclid":{
            euclid(parseStr[0],parseStr[1]);
        } break;
        case "Fibonach":{
            fibonach(parseStr[0]);
        } break;
    }
}

function select_item(){
    switch ( list.options[list.selectedIndex].value) {
        case "Fibonach":{
            label_in.value = "15";
        } break;
        case "Euclid":{
            label_in.value = "20 32";
        }  break;
        case "Section":{
            label_in.value = "???";
        }  break;
    }
}