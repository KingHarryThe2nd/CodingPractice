const bestSum = (target, numbers, memo = {}) => {
if (target in memo)
{
    return memo[target]
}
if (target===0) return [];
if (target<0) return null;
let shortestCombo = null;

for (let num of numbers)
{
    const result = target-num;
    const newCombo = bestSum(result,numbers, memo)
    if (newCombo != null)
    {
        const filler = [ ...newCombo, num];
        if (shortestCombo === null || shortestCombo.length > filler.length)
        {
            shortestCombo = filler;
        }
        

    }
}
memo[target] = shortestCombo;
return memo[target];
}
console.log(bestSum(100,[1,2,5,25]));