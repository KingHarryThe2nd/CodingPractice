const howSumTab = (target, numbers)=>{
    table = Array(target+1).fill(null);
    table[0] = [];

    for (let i = 0; i<=target; i++)
    {
        if (table[i] != null)
        {
            for (let num of numbers)
            {   if (i+num <= target)
                {table[i+num] = [...table[i], num];}
            }

        }
    }
return table[target];
}
//console.log(howSumTab(10,[2,5,8]));
//console.log(howSumTab(10,[4, 6,13]));
console.log(howSumTab(10,[2,3,4]));