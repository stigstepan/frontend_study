
function terms(data){
    var n = parseInt(data.toString().split(" ")[0]); 
 
    var terms = [];
    var sum = 0;
    
    if(n <3){
        console.log("1\n"+n);
        return;
    }
    
    for(var i = 1; i < n; i++){
       if(n-(sum + i) == 0) {
           terms.push(i);
           break;
       }
       if(n - (sum+i+i+1) < 0) continue;
        terms.push(i);
        sum+=i;
    }
    
    label_out.value = terms.length + "\n";
    for (var j = 0; j<terms.length ; j++)
        label_out.value += terms[j]+" ";
}