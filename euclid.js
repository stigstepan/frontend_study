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
    
    console.log(b); 
//    module.exports.euclid = euclid;
}
