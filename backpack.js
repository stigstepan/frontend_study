function backpack(data){
    try{
        let n = data.toString().split("\n"); 
        let things = [];
        let len = parseInt(n[0]); // number of things
        let volume = parseFloat(n[0].split(' ')[1]);
        if(isNaN(len) || isNaN(volume)) throw "not a number";

        let genV = 0;
        let genC = 0;


        for(let i = 1; i < len + 1; i++)
        {
            let nums = n[i].split(' ');

            let n1 = parseFloat(nums[0]), n2 = parseFloat(nums[1]);
            if(isNaN(n1)|| isNaN(n2)) throw "not a number";

            if(n2==0) continue;
            things.push([n1, n2, n1/n2]);
        }

        things.sort(sortByCost);
        
        for (let i = 0; i < things.length; i++){
            if(genV + things[i][1] <= volume){
                genC += things[i][0];
                genV += things[i][1];
            } else {
                let r = volume - genV;
                if (r == 0) break;
                things[i][0] *= r/things[1];
                things[i][1] = r;
                genC += things[i][0];
                genV += things[i][1];
                break;
            }
            
        }

        
        let label_out = document.getElementById('data-out');
        
        label_out.value = genC.toFixed(3);
    } catch(e){
        label_out.value = "Некорректный ввод.";
        return;
    }
}

function sortByCost(a,b){
    if(a[2] < b[2]) return 1;
    if(a[2] > b[2]) return -1;
}