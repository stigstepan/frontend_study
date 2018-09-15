var start_button = document.getElementById("data-submit");
start_button.addEventListener("click", start); 
var list = document.getElementById('list');
list.addEventListener("change", select_item);
var label_in = document.getElementById('data-in');


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
    }

}

function euclid(a,b){
    if(a<b) {
        a^=b;
        b^=a;
        a^=b;
    }
    while(a>0){
        a%=b;
        if(a===0) break;
        a^=b;
        b^=a;
        a^=b;
    }
    
    let label_out = document.getElementById('data-out');
    
    label_out.value = b; 
}

function fibonach(n){
    let label_out = document.getElementById('data-out');

    if (n<2){
        label_out.value = n; 
        return;
    }
    var x = 0, y = 1;
    for(var i = 0; i < n; i ++){
        x = x + y;
        x^=y;
        y^=x;
        x^=y;
    }
    label_out.value = x; 
}