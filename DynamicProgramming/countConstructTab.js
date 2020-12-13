const countConstructTab = (target, wordBank) => {
table = Array(target.length+1).fill(0);
table[0] = 1;

for (let i = 0; i< target.length+1; i++)
{
    if (table[i]>0)
    {
        for (let word of wordBank)
        {
            if (word === target.slice(i, i+word.length))
            {
                table[i+word.length]+= table[i];
            }
        }
    }
}
console.log(table);
return table[target.length];
}
console.log(countConstructTab('purple',['purp', 'p', 'le', 'ur', 'purpl', 'pur', 'e']));
console.log(countConstructTab('jkrolling',['j', 'k', 'r', 'o', 'l', 'i', 'n', 'g']));
console.log(countConstructTab('money', ['art', 'tax', 'taxi', 'mon', 'ney']));