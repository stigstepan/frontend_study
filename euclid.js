var a = 40, b = 10;
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

// ВАШ КОД ЗДЕСЬ 


console.log(b); 