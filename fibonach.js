let label_out = document.getElementById('data-out');

// const memoize = (fn) => {
//     let dict = {};
//     return (...args) => {
//       let n = args[0];
//       if (n in dict) {
//         console.log('Восстановлено из словаря', n);
//         label_out.value = dict[n]; 
//         return dict[n];
//       }
//       else {
//         console.log('Посчитано', n);
//         let result = fn(n);
//         dict[n] = result;
        
//         label_out.value = result; 
//         return result;
//       }
//     }
//   }
  
  // const fibonach = memoize(
  //   (data, mode) => {
  //       let nums = data.split(' ');
  //       n = parseInt(nums[0]);

  //       if (n==1){
  //           label_out.value = 0; 
  //           return 0;
  //       }
  //       if (n==2){
  //           label_out.value = 1; 
  //           return 1;
  //       }
  //       var x = 0, y = 1;
  //       for(var i = 0; i < n-1; i ++){
  //           x = x + y;
  //           if (mode) x%=10;
  //           x^=y;
  //           y^=x;
  //           x^=y;
  //       }
  //       return x; 
  //   }
  // );




function fibonach(n,mode){
    let label_out = document.getElementById('data-out');

    if (n==1){
        label_out.value = 0; 
        return;
    }
    if (n==2){
        label_out.value = 1; 
        return;
    }
    var x = 0, y = 1;
    for(var i = 0; i < n-1; i ++){
        x = x + y;
        if (mode) x%=10;
        x^=y;
        y^=x;
        x^=y;
    }
    label_out.value = x; 
}