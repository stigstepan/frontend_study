function fibonach(n){

    var x = 0, y =1;
    for(var i = 0; i < n-1; i ++){
        x = x+y;
        x^=y;
        y^=x;
        x^=y;
    }

    console.log(y);
}