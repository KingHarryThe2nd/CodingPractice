const bestSumTab = (target, numbers)=>{
    table = Array(target+1).fill(null);
    table[0] = [];

    for (let i = 0; i<=target; i++)
    {
        if (table[i] != null)
        {
            for (let num of numbers)
            {   if (i+num <= target){
                    const newPart = [...table[i], num];
                if (table[i+num]== null || table[i+num].length > newPart)
                    {
                        table[i+num] = newPart;
                    };
                
                
                }
            }

        }
    }
return table[target];
};
console.log(bestSumTab(100,[2,5,20]));
console.log(bestSumTab(8,[2,3,5]));
console.log(bestSumTab(10,[2,3,4]));