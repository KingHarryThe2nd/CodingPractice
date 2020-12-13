const countConstruct = (target, WordBank, memo={}) => {
    if (target in memo){
        return memo[target];
    }
    if (target ==='')
    {
        return 1;
    }
    let wayCounter = 0;
   
    for (let word of WordBank)
    {
        if (target.indexOf(word)===0)
        {   
            const ways = countConstruct(target.slice(word.length), WordBank, memo);
            memo[target] = ways;
            wayCounter += memo[target];
        }
    }
    memo[target] = wayCounter
    return memo[target];
};

console.log(countConstruct('Apple', ['p', 'l', 'ok', 'e', 'A', 'j']));
console.log(countConstruct('Apple', ['l', 'ok', 'e', 'A', 'j']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eeeeeee', 'eeeeeeeee', 'ee', 'eeee', 'eeeeeeeeeee']));
console.log(countConstruct('purple', ['p', 'purp', 'ur', 'le', 'purpl']));