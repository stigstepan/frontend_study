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
    if ( list.options[list.selectedIndex].value === "Fibonach") {
        label_in.maxlength = 5;
    } else{
        label_in.maxlength = 100;
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

    var x = 0, y =1;
    for(var i = 0; i < n-1; i ++){
        x = x+y;
        x^=y;
        y^=x;
        x^=y;
    }

    let label_out = document.getElementById('data-out');
    
    label_out.value = x; 
}