canSumTab = (target, numbers) => {
const table = Array(target +1).fill(false);
table[0] = true;


for (let z = 0; z <=target ; z++)
{
    if (table[z] ===true)
    for (let num of numbers)
    {
        if (z+num<= target)
        {
            table[z+num] = true;
        }
    }
}
return table[target];
};
console.log(canSumTab(10,[2,5,8]));
console.log(canSumTab(10,[4,12,13]));
console.log(canSumTab(10,[0,8,3]));