function segments(data){
    try{
        let n = data.toString().split("\n"); 
        let sections = [];
        for(let i=1; i < parseInt(n[0])+1; i++)
        {
            let nums = n[i].split(' ');
            if(isNaN(nums[0])|| isNaN(nums[1])) throw "not a number";
            sections.push([parseInt(nums[0]), parseInt(nums[1])]);
        }

        sections.sort(function(a,b){
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        });
        let dot = [sections[0][1]];
        for(let i = 1; i<sections.length;i++){
                if(sections[i][0]<=dot[dot.length-1] && sections[i][1]>=dot[dot.length-1]){
                    continue;
                } else {
                    dot.push(sections[i][1]);
                }
        }
        label_out.innerHTML = dot.length+'<br \/>';

        for (let i = 0; i < dot.length; i++)
            label_out.innerHTML += dot[i] + ' '; 
    } catch(e){
        label_out.innerHTML = "Некорректный ввод.";
        return;
    }
    


}