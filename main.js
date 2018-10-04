var start_button = document.getElementById("data-submit");
start_button.addEventListener("click", start); 
var list = document.getElementById('list');
list.addEventListener("change", select_item);
var label_in = document.getElementById('data-in');
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
        case "Segments":{
            label_in.value = "4\n4 7\n1 3\n2 5\n5 6"
        }
    }
}