const allConstruct = (target, wordBank, memo={}) =>{
    if (target ==='')
    {
        return [[]];
    }
    const result = [];
    for (let word of wordBank)
    {
        if (target.indexOf(word)===0)
        {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo); 
            const targetWays= sufficWays.map(way => [word,...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result
    return result;
}