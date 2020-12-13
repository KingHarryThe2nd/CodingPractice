const canConstruct = (target, WordBank, memo={}) => {
    if (target in memo)
        {
            return memo[target];
        }
    if (target ==='')
        {
        return true;
        }
    for (word of WordBank)
        {if (target.indexOf(word)===0)
            {
                const suff = target.slice(word.length);
                if (canConstruct(suff, WordBank,memo) === true)
                {memo[target]= true;
                return memo[target]}
            }
        }
memo[target]=false;
return memo[target];
}

console.log(canConstruct('Apple', ['p', 'l', 'ok', 'e', 'A', 'j']));
console.log(canConstruct('Apple', ['l', 'ok', 'e', 'A', 'j']));
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['eeeeeee', 'eeeeeeeee', 'ee', 'eeee', 'eeeeeeeeeee']));