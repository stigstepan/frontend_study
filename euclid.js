function euclid(data){

    let nums = data.split(' ');
    a = parseInt(nums[0]);
    b = parseInt(nums[1]);

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